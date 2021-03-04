export default async function tempo(Request, Response){
  const apiSecret = process.env.TECNO200_API_SECRET;
  const mongoResponse = await fetch(`${passWord} ${apiSecret}`);
  const dynamicDate = new Date();
  Response.json({ date: dynamicDate.toGMTString() })
}
