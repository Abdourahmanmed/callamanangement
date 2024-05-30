import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from '@/components/Form';
import Table from '@/components/Table';

const Scripts = () => {
  const agents = [
    {
      num: 1,
      nom: "script entrant",
    },
    {
      num: "2",
      nom: "script entrant",
    },
    {
      num: 3,
      nom: "script entrant",
    },
    {
      num: 4,
      nom: "script entrant",
    },
  ];

  const TheadTable = [
    { td: "Numero" },
    { td: "Nom" },
    { td: "Action" },
  ];

  return (
    <div className="px-8 py-8 w-full">
      <div className="flex w-full justify-end items-center">
        <Dialog>
          <DialogTrigger>
            <span className='text-blue cursor-pointer hover:bg-blue hover:text-white px-4 py-2 rounded'>Ajouter</span>
          </DialogTrigger>
          <DialogContent className="h-auto sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add agents</DialogTitle>
              <DialogDescription>
                Make add to your agents here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <Form />
          </DialogContent>
        </Dialog>
      </div>
      <Table data={agents} thead={TheadTable} />
    </div>
  );
};

export default Scripts;
