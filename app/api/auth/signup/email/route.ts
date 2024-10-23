
import client from "@/lib/auth-Client";

export async function POST(req: Request ) {
const { data, error } = await client.signUp.email({
    email: "test@example.com",
    password: "password1234",
    name: "test",
    image: "https://example.com/image.png",
    callbackURL: "/",
  });
  if(data){
    console.log(data + "is present")
  }
  if(error){
    console.log(error + "this is your error")
  }
}