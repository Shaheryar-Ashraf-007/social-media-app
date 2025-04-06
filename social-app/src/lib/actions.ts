"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";

interface FollowRequest {
    id: string;
    senderId: string;
    receiverId: string;
}

interface Follower {
    id: string;
    followerId: string;
    followingId: string;
}

export const switchFollow = async (userId: string): Promise<void> => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingUser: Follower | null = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: userId,
            },
        });

        if (existingUser) {
            await prisma.follower.delete({
                where: {
                    id: existingUser.id,
                },
            });
        } else {
            const existingFollowRequest: FollowRequest | null = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUserId,
                    receiverId: userId,
                },
            });

            if (existingFollowRequest) {
                await prisma.followRequest.delete({
                    where: {
                        id: existingFollowRequest.id,
                    },
                });
            } else {
                await prisma.followRequest.create({
                    data: {
                        senderId: currentUserId,
                        receiverId: userId,
                    },
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
};

export const switchBlock = async (userId: string): Promise<void> => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingBlock = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: userId,
            },
        });

        if (existingBlock) {
            await prisma.block.delete({
                where: {
                    id: existingBlock.id,
                },
            });
        } else {
            await prisma.block.create({
                data: {
                    blockerId: currentUserId,
                    blockedId: userId,
                },
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const acceptFollowRequest = async (userId: string): Promise<void> => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUserId,
            },
        });

        if (existingFollowRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id,
                },
            });
        }

        await prisma.follower.create({
            data: {
                followerId: userId,
                followingId: currentUserId,
            },
        });
    } catch (error) {
        console.error(error);
    }
};

export const declineFollowRequest = async (userId: string): Promise<void> => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where: {
                senderId: userId,
                receiverId: currentUserId,
            },
        });

        if (existingFollowRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id,
                },
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const updateProfile = async (
    prevState: { success: boolean; error: boolean },
    payload: { formData: FormData; cover: string }

    
) => {
    const { formData, cover } = payload;

    
    const fields = Object.fromEntries(formData);
    

    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([, value]) => value !== "")
    );

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(255).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional(),
    });

    const validatedFields = Profile.safeParse({ cover, ...filteredFields });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return { success: false, error: true };
    }

    const { userId } = await auth();

    if (!userId) {
        return { success: false, error: true };
    }

    try {
         await prisma.user.update({
            where: {
                id: userId,
            },
            data: validatedFields.data,
        });

        // Log the validated fields and updated user data
        console.log("Validated Fields:", validatedFields.data);

        return { success: true, error: false };
    } catch (err) {
        console.log(err);
        return { success: false, error: true };
    }
};
