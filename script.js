import {config } from "dotenv"
config()



import {Configuration ,OpenAIApi} from "openai"
import readline from "readline"

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.API_KEY,
  })

)

const userInterface = readline.createInterface({
  input  :process.stdin,
  output: process.stdout
})

userInterface.prompt()
userInterface.on("line",async,async input=>{
  const response  = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages: [{role:"user", content:input }],
  })
   console.log(res.data.choices[0].messages.content)

})


