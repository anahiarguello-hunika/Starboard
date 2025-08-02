
'use client';

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";

export default function CalendarPage() {
    const [view, setView] = useState<'month' | 'year' | 'day'>('month');
    const [currentDate, setCurrentDate] = useState<Date | undefined>(undefined);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);


    const renderCalendarView = () => {
        if (!currentDate) {
            return null; // O un spinner de carga
        }
        switch (view) {
            case 'month':
                return <Calendar mode="single" selected={currentDate} onSelect={(date) => date && setCurrentDate(date)} className="p-0" month={currentDate} />;
            case 'year':
                 return <div className="p-4 grid grid-cols-4 gap-4">
                    {[...Array(12)].map((_, i) => (
                        <div key={i}>
                            <h3 className="text-center font-semibold mb-2">{new Date(currentDate.getFullYear(), i).toLocaleString('default', { month: 'long' })}</h3>
                            <Calendar mode="single" month={new Date(currentDate.getFullYear(), i)} />
                        </div>
                    ))}
                </div>;
            case 'day':
                 return <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">{currentDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                    <div className="space-y-4">
                        {[...Array(24)].map((_, i) => (
                             <div key={i} className="flex items-center gap-4 pb-4 border-b">
                                <div className="w-16 text-right text-sm text-muted-foreground">
                                    {i}:00
                                </div>
                                <div className="flex-1 h-8">
                                    {/* Events could be rendered here */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>;
        }
    };
    
    const goToPrevious = () => {
        if (!currentDate) return;
        if (view === 'month') {
            setCurrentDate(prev => new Date(prev!.getFullYear(), prev!.getMonth() - 1, 1));
        } else if (view === 'year') {
             setCurrentDate(prev => new Date(prev!.getFullYear() - 1, 0, 1));
        } else {
             setCurrentDate(prev => new Date(prev!.getFullYear(), prev!.getMonth(), prev!.getDate() - 1));
        }
    };

    const goToNext = () => {
         if (!currentDate) return;
         if (view === 'month') {
            setCurrentDate(prev => new Date(prev!.getFullYear(), prev!.getMonth() + 1, 1));
        } else if (view === 'year') {
             setCurrentDate(prev => new Date(prev!.getFullYear() + 1, 0, 1));
        } else {
             setCurrentDate(prev => new Date(prev!.getFullYear(), prev!.getMonth(), prev!.getDate() + 1));
        }
    };

    const getHeaderText = () => {
         if (!currentDate) return '';
         if (view === 'month') {
            return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        } else if (view === 'year') {
             return currentDate.getFullYear();
        } else {
             return currentDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
        }
    }


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
          <CalendarIcon className="h-8 w-8" />
          Calendario
        </h1>
        <p className="text-muted-foreground">
          Gestione sus eventos y horarios.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={goToPrevious}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                     <h2 className="text-lg font-semibold w-48 text-center">{getHeaderText()}</h2>
                     <Button variant="outline" size="icon" onClick={goToNext}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-2 p-1 bg-muted rounded-md">
                    <Button variant={view === 'day' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('day')} className={view === 'day' ? 'bg-white' : ''}>Día</Button>
                    <Button variant={view === 'month' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('month')} className={view === 'month' ? 'bg-white' : ''}>Mes</Button>
                    <Button variant={view === 'year' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('year')} className={view === 'year' ? 'bg-white' : ''}>Año</Button>
                </div>
            </div>
            {renderCalendarView()}
        </CardContent>
      </Card>
    </div>
  );
}
