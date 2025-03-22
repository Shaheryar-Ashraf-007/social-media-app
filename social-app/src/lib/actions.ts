"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

interface User {
    id: string;
    followerId: string;
    followingId: string;
}

interface FollowRequest {
    id: string;
    senderId: string;
    receiverId: string;
}

export const switchFollow = async (userId: string): Promise<void> => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingUser: User | null = await prisma.follower.findFirst({
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
        const existingBlock: User | null = await prisma.block.findFirst({
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