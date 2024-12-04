import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Skills() {
  return(
    <div className="h-[90vh] bg-green-400 flex flex-col items-center justify-center ">
    <Card >
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription >
             <h1>
             MS Access
                </h1>
                <h1>
             MS TS
                </h1>
                <h1>
             Nextjs
                </h1>
                <h1>
             Andrpod with mysql crud app
                </h1>
            </CardDescription>
          </CardHeader>
          
        </Card>
     </div>
        
   
   

  );

 
}


