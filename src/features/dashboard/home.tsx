import AiSearch from './components/ai-search';
import { Component } from './components/horizontal-charts';
import { UpcomingMeetings } from './components/schedule-list';
import TaskSummary from './components/task-list';
import CallHistoryTable from './components/recent-calls';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
export default function Home() {
    return (
        <div className="md:p-4 p-2 ">

            <Breadcrumb className=' ml-2 '>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-2xl font-semibold text-text-dark ml-2 mt-2 mb-4">Dashboard</h1>

            {/* Main Content*/}
            <div className="flex flex-1 flex-col gap-4 md:p-2 ">
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Ai Search Component*/}
                    <div className="flex flex-col md:col-span-2 gap-2.5">
                        <AiSearch />
                    </div>
                    {/* Sales Snapshot Charts */}
                    <div className="flex flex-col md:col-span-1 gap-2">
                        <Component />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TaskSummary />
                    <UpcomingMeetings />
                </div>

                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
                    <CallHistoryTable />
                </div>

            </div>
        </div>
    );
}