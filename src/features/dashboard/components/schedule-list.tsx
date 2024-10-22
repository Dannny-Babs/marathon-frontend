import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Calendar03Icon } from 'hugeicons-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function UpcomingMeetings() {
    const [meetings, setMeetings] = useState([
        {
            day: "Mon, 12 Jul",
            time: "10:00 AM",
            name: "Post-Demo Feedback",
            link: "https://www.google.com",
            company: "St. Mary's Hospital",
            
        },
        {
            day: "Mon, 12 Jul",
            time: "11:00 AM",
            name: "Demo with Isabella Nguyen",
            link: "https://www.google.com",
            company: "Mary Rogers Hospital",
        },
        {
            day: "Mon, 12 Jul",
            time: "12:00 PM",
            name: "Lunch with William Kim",
            link: "https://www.google.com",
            company: "McMaster Student Hospital",
        },
        {
            day: "Tue, 13 Jul",
            time: "1:00 PM",
            name: "Meeting with Jackson Lee",
            link: "https://www.google.com",
            company: "St. John's Hospital",
        },
        {
            day: "Tue, 13 Jul",
            time: "2:00 PM",
            name: "Meeting with Jackson Lee",
            link: "https://www.google.com",
            company: "St. Michael's Hospital",
        },
        {
            day: "Tue, 13 Jul",
            time: "3:00 PM",
            name: "Initial Discovery Call",
            link: "https://www.google.com",
            company: "St. Joseph's Hospital",
        },
        {
            day: "Tue, 13 Jul",
            time: "4:00 PM",
            name: "Meeting with Jackson Lee",
            link: "https://www.google.com",
            company: "St. Joseph's Hospital",
        },
        {
            day: "Tue, 13 Jul",
            time: "5:00 PM",
            name: "Meeting with Jackson Lee",
            link: "https://www.google.com",
            company: "St. Joseph's Hospital",
        },
    ]);



    function getFormattedDate(date: Date) {
        const year = date.getFullYear()
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate().toString().padStart(2, "0")
        return `${month} ${day}, ${year}`
    }

    return (
        <Card className="w-full ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold text-gray-700">Upcoming Meetings</CardTitle>
                <Badge variant="secondary" className="text-xs">
                    This Week
                </Badge>
            </CardHeader>
            <CardContent>
                <div className="text-2xl text-text-dark font-bold">{meetings.length} meetings</div>
                <p className="text-xs text-muted-foreground mt-1">
                    Next meeting on {getFormattedDate(new Date())}
                </p>
                <ScrollArea className="h-[27rem] mt-4">
                    {meetings.map((meet, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between py-3 border-t first:border-t-0"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-primaryBlue-700/10">
                                    <Calendar03Icon className="h-6 w-6 text-primaryBlue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium m leading-none">
                                        {meet.name}
                                    </p>
                                    <div className="text-xs text-muted-foreground mt-1 flex flex-row gap-0.5">
                                        <p>{meet.company}</p>
                                        <p>&bull;</p>
                                        <p>{meet.day} at {meet.time}</p>
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" asChild>
                                <a href={meet.link} className="text-primary hover:text-primary/80">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Go to meeting</span>
                                </a>
                            </Button>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )
}