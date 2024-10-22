import  { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeft, ChevronRight, Phone, FileText } from "lucide-react"
import { CallDetailsDrawer } from "./side-drawer" // Import the drawer component

const callData = [
  {
    id: 1,
    contactName: "John Smith (ABC Inc.)",
    callDate: "2024-09-14 10:15 AM",
    interactionType: "Negotiation",
    callOutcome: "Proposal Sent",
    duration: "45 mins",
    nextStep: "Follow-up on pricing",
  },
  {
    id: 2,
    contactName: "Jane Doe (XYZ Corp.)",
    callDate: "2024-09-14 09:50 AM",
    interactionType: "Demo",
    callOutcome: "Scheduled Demo",
    duration: "25 mins",
    nextStep: "Send product brochure",
  },
  {
    id: 3,
    contactName: "Alan Brown (DEF Ltd.)",
    callDate: "2024-09-13 04:00 PM",
    interactionType: "Closing",
    callOutcome: "Contract Signed",
    duration: "50 mins",
    nextStep: "Send thank you email",
  },
  {
    id: 4,
    contactName: "Sarah Johnson (GHI Corp.)",
    callDate: "2024-09-13 02:30 PM",
    interactionType: "Discovery",
    callOutcome: "Qualified Lead",
    duration: "35 mins",
    nextStep: "Schedule follow-up call",
  },


  // ... more calls
]

const interactionTypeColors = {
  Negotiation: "bg-purple-100 text-purple-800",
  Demo: "bg-blue-100 text-blue-800",
  Closing: "bg-green-100 text-green-800",
  Discovery: "bg-yellow-100 text-yellow-800",
}

export default function CallHistoryTable() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false) // State for managing drawer visibility
  const [selectedCall, setSelectedCall] = useState<any>(null) // State to store selected call details

  const handleViewNotes = (call: any) => {
    setSelectedCall(call) // Set the selected call data
    setIsDrawerOpen(true)  // Open the drawer
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-1">
        <CardTitle className="text-sm text-gray-800 tracking-normal font-semibold">Call History</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
          Click to see a detailed view of your call.
        </p>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Contact Name</TableHead>
                <TableHead className="font-medium hidden sm:table-cell">Call Date</TableHead>
                <TableHead className="font-medium md:table-cell hidden">Interaction</TableHead>
                <TableHead className="font-medium hidden md:table-cell">Outcome</TableHead>
                <TableHead className="font-medium px-2 ">Duration</TableHead>
                <TableHead className="font-medium hidden xl:table-cell">Next Step</TableHead>
                <TableHead className="text-right font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callData.map((call, index) => (
                <TableRow key={call.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="text-primaryBlue-900 font-medium">
                    {call.contactName}
                    <div className="sm:hidden text-xs text-gray-500 mt-1">{call.callDate}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-xs font-medium text-gray-700">{call.callDate}</TableCell>
                  <TableCell className="md:table-cell hidden">
                    <Badge
                      variant="secondary"
                      className={`${interactionTypeColors[call.interactionType as keyof typeof interactionTypeColors]} text-xs font-normal`}
                    >
                      {call.interactionType}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-xs font-medium text-gray-700">{call.callOutcome}</TableCell>
                  <TableCell className="px-2 w-3 text-xs">{call.duration}</TableCell>
                  <TableCell className="hidden lg:table-cell text-sm font-medium text-gray-700">{call.nextStep}</TableCell>
                  <TableCell className="text-right md:w-10">
                    <Button variant="ghost" size="sm" className="mr-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-1 sm:p-2">
                      <Phone className="h-4 w-4" />
                      <span className="hidden sm:inline ml-2">Call Back</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-800 hover:bg-purple-100 p-1 sm:p-2"
                      onClick={() => handleViewNotes(call)} // Trigger drawer opening with selected call
                    >
                      <FileText className="h-4 w-4" />
                      <span className="hidden sm:inline ml-2">View Notes</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="items-center hidden justify-between space-x-2 py-4">
          <div className="text-xs sm:text-sm text-muted-foreground">Page 1 of 3</div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <ChevronLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              Next
              <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Drawer for displaying and editing call details */}
      {selectedCall && (
        <CallDetailsDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}  // Close drawer function
          callData={{
            contactName: selectedCall.contactName,
            company: selectedCall.contactName.split('(')[1]?.replace(')', '') || 'Unknown Company',
            callDate: selectedCall.callDate,
            duration: selectedCall.duration,
            callOutcome: selectedCall.callOutcome,
            summary: "Discussed product features and pricing. Client showed interest in our enterprise solution.",
            objections: "Concerned about implementation timeline and cost.",
            decisionMakers: "Sarah Johnson (CTO), Mark Williams (CFO)",
            nextSteps: "Send detailed proposal by next week. Schedule a demo with the technical team.",
            salesStage: selectedCall.interactionType,
            companyOverview: "Mid-size tech company, 500+ employees, looking to upgrade their CRM system.",
            productsOfInterest: "Enterprise CRM Suite, Analytics Module",
            salesforceStatus: "Opportunity - Proposal Stage",
            dealSize: "$250,000 - $500,000",
            proposalLink: "https://example.com/proposals/abc-inc-proposal.pdf",
          }}
        />
      )}
    </Card>
  )
}
