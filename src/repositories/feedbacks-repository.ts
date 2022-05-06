export interface FeedbackCreateProps{
  type:string;
  comment:string;
  screenshot?:string;
}

export interface FeedbacksRepository{
  create:(data:FeedbackCreateProps)=>Promise<void>;

}