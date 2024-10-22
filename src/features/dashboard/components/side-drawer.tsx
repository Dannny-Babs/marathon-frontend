"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import debounce from "lodash.debounce" // We'll use lodash debounce to handle autosaving

interface CallDetailsDrawerProps {
    isOpen: boolean
    onClose: () => void
    callData: {
        contactName: string
        company: string
        callDate: string
        duration: string
        callOutcome: string
        summary: string
        objections: string
        decisionMakers: string
        nextSteps: string
        salesStage: string
        companyOverview: string
        productsOfInterest: string
        salesforceStatus: string
        dealSize: string
        proposalLink: string
    }
}

export function CallDetailsDrawer({ isOpen, onClose, callData }: CallDetailsDrawerProps) {
    const [formData, setFormData] = useState(callData)
    const [saving, setSaving] = useState(false)

    // Debounced save function to minimize API calls
    const saveData = useCallback(
        debounce(async (updatedData) => {
            setSaving(true)
            // Simulate a backend API call to save data
            await new Promise((resolve) => setTimeout(resolve, 1000)) // Mock saving delay
            console.log("Data saved:", updatedData) // In a real scenario, send the data to your backend here
            setSaving(false)
        }, 1000), // Adjust the debounce delay (1000ms in this case) as needed
        []
    )

    // Handle form field changes and trigger autosave
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
        saveData({ ...formData, [id]: value }) // Trigger debounced save with updated data
    }

    useEffect(() => {
        setFormData(callData) // Reset form data when drawer is opened with new data
    }, [callData])

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-[400px] sm:w-[560px] sm:max-w-[calc(100vw-3rem)] font-Instrument">
                <ScrollArea className="h-[calc(100vh-4.5rem)] pr-4">
                    <SheetHeader>
                        <SheetTitle className="text-2xl text-text-dark font-bold">Call Details</SheetTitle>
                        <SheetDescription>View and edit call information</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 space-y-6">
                        <Separator />
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="contactName" className="font-semibold text-xs text-gray-700">Contact Name</Label>
                                <Input
                                    id="contactName"
                                    value={formData.contactName}
                                    onChange={handleInputChange}
                                    readOnly className="shadow-none mt-1.5"
                                />
                            </div>
                            <div>
                                <Label htmlFor="company" className="font-semibold text-xs  text-gray-700">Company</Label>
                                <Input id="company" value={formData.company} readOnly className="shadow-none mt-1.5" />
                            </div>
                            <div>
                                <Label htmlFor="callDate" className="font-semibold text-xs  text-gray-700">Call Date & Time</Label>
                                <Input id="callDate" value={formData.callDate} readOnly className="shadow-none mt-1.5"/>
                            </div>
                            <div>
                                <Label htmlFor="duration" className="font-semibold text-xs  text-gray-700">Duration</Label>
                                <Input id="duration" value={formData.duration} readOnly className="shadow-none  mt-1.5"/>
                            </div>
                            <div>
                                <Label htmlFor="callOutcome" className="font-semibold text-xs  text-gray-700">Call Outcome</Label>
                                <Input id="callOutcome" value={formData.callOutcome} onChange={handleInputChange} className="shadow-none mt-1.5"/>
                            </div>
                            <div>
                                <Label htmlFor="salesStage" className="font-semibold text-xs  text-gray-700">Sales Stage</Label>
                                <Input id="salesStage" value={formData.salesStage} onChange={handleInputChange} className="shadow-none mt-1.5"/>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <Label htmlFor="summary" className="font-semibold text-xs  text-gray-700">Summary of Discussion</Label>
                            <Textarea id="summary" value={formData.summary} onChange={handleInputChange} className="mt-1 shadow-none" />
                        </div>

                        <div> 
                            <Label htmlFor="objections" className="font-semibold text-xs  text-gray-700">Objections/Concerns</Label>
                            <Textarea id="objections" value={formData.objections} onChange={handleInputChange} className="mt-1 shadow-none" />
                        </div>

                        <div>
                            <Label htmlFor="decisionMakers" className="font-semibold text-xs  text-gray-700">Decision Makers</Label>
                            <Input id="decisionMakers" value={formData.decisionMakers} onChange={handleInputChange} className="shadow-none mt-1.5" />
                        </div>

                        <Separator />

                        <div>
                            <Label htmlFor="nextSteps" className="font-semibold text-xs  text-gray-700">Next Steps (Actionable Items)</Label>
                            <Textarea id="nextSteps" value={formData.nextSteps} onChange={handleInputChange} className="mt-1  shadow-none" />
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-primaryBlue-700">Customer Information</h3>
                            <div className="space-y-2">
                                <div>
                                    <Label htmlFor="companyOverview" className="font-semibold text-xs  text-gray-700">Company Overview</Label>
                                    <Textarea
                                        id="companyOverview"
                                        value={formData.companyOverview}
                                        onChange={handleInputChange}
                                        className="mt-1 shadow-none"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="productsOfInterest" className="font-semibold text-xs  text-gray-700">Key Products/Services of Interest</Label>
                                    <Input
                                        id="productsOfInterest"
                                        value={formData.productsOfInterest}
                                        onChange={handleInputChange} className="shadow-none mt-1.5"
                                    />
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-primaryBlue-700">CRM Integration</h3>
                            <div className="space-y-2">
                                <div>
                                    <Label htmlFor="salesforceStatus" className="font-semibold text-xs  text-gray-700">Salesforce Status</Label>
                                    <Input id="salesforceStatus" value={formData.salesforceStatus} readOnly className="shadow-none mt-1.5" />
                                </div>
                                <div>
                                    <Label htmlFor="dealSize" className="font-semibold text-xs  text-gray-700">Deal Size</Label>
                                    <Input id="dealSize" value={formData.dealSize} readOnly  className="shadow-none mt-1.5" />
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-primaryBlue-700">Documents/Resources Shared</h3>
                            <div>
                                <Label htmlFor="proposalLink" className="font-semibold text-xs  text-gray-700">Proposal Document</Label>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Input id="proposalLink" value={formData.proposalLink} readOnly  className="shadow-none mt-1.5"/>
                                    <Button variant="outline">View</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                <SheetFooter >
                    <SheetClose asChild>
                        <Button type="submit" className="bg-primaryBlue-600 ">Close</Button>
                    </SheetClose>
                    {saving && <span className="text-sm text-gray-500 ml-2">Saving...</span>}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
