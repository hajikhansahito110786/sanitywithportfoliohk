//import { TabsDemo } from "./mycomponents/mycard2";


import { TabsDemo } from "../../mycomponents/tabs";
import Herocomponent from "./herocomponent";
import Space1 from "./space";
import Textarea1 from "./textarea";

export default function Detail() {
    return (
        <div className="bg-lime-400 h-screen flex flex-col items-left p-3">
    
            <TabsDemo/>
            <Space1/>
            <Textarea1/>
            <Herocomponent/>

      </div>
    );
  }
  