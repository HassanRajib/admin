import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const SingleUserpage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Deshboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
        {/* user badges */}
        <div className="bg-primary-foreground p-4 rounded-lg"></div>
        {/* informantion */}
        <div className="bg-primary-foreground p-4 rounded-lg"></div>
        {/* Card list */}
        <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transction"/>
        </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
        {/* user card container */}
        <div className="bg-primary-foreground p-4 rounded-lg">

        </div>
        {/* chart container */}
        <div className="bg-primary-foreground p-4 rounded-lg">

        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserpage;
