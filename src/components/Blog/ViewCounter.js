"use client"
import { createClient } from '@supabase/supabase-js';

import React,{useEffect, useState} from 'react'

const projectUrl = "https://mdykspmcncbwnbeckmex.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1keWtzcG1jbmNid25iZWNrbWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3ODYzMzksImV4cCI6MjAxMzM2MjMzOX0.s7X0IarRztowCIGvALkfQ_4zzmFbSUgzEVnfY7Bz2Wo"
const supabase = createClient(projectUrl,key);

const ViewCounter = ({slug, noCount=false, showCount= true}) => {
        const [views, setViews] = useState(0)

        useEffect(() => {
            const getViews = async () => {
                try {
                    let {data, error} = await supabase.from("views").select('count').match({slug:slug}).single()

                    if (error) {
                        console.error("Unable to increment view:", error)
                    }
                    setViews(data ? data.count: 0)
            }catch(error) {
                console.error(
                    "Ana error occurred while incrementing view count:", error
                )
            }
        };
    getViews();
},[slug]);


useEffect(() => {
    const incrementView = async () => {
        try {
            let {error} = await supabase.rpc("increment", {
                slug_text:slug,
            })

            if (error) {
                console.error("Error incrementing view count inside try block:", error)
            }
        }catch(error) {
          console.error("An error occurred while incrementing the view count:",error)
        }
    }
    if(!noCount){
        incrementView()
    }
   
},[slug, noCount])

        if (showCount) {
  return <div>{views} views</div>
        }else {
            return null;
        }
  
}

export default ViewCounter;