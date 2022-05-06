import { prisma } from "../../prisma";
import { FeedbackCreateProps, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
  async create({type, comment, screenshot}: FeedbackCreateProps){
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
  })

  };
}