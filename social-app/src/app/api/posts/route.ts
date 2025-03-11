import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {

    const {userId} = await auth()
  try {
    const body = await request.json();
    const { desc,img} = body;
    const id = uuidv4();
    const currentTime: Date = new Date();
    const post = {
      id,
      desc,
      img:img || null,
      createdAt: currentTime,
      updatedAt: currentTime,
      userId: userId || null,
    }; 
    
    return NextResponse.json({ 
      message: "Post created successfully",
      post
    }, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ 
      error: "Failed to create post" 
    }, { status: 500 });
  }
}