
'use client';

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { addDays, format, startOfWeek, addHours, isSameDay, isToday } from 'date-fns';
import { es } from 'date-fns/locale';

interface CalendarEvent {
    start: Date;
    end: Date;
    title: string;
    description?: string;
    calendar: 'Elias Bardawil' | 'Firm' | 'Tasks';
}

const events: CalendarEvent[] = [
    { start: new Date(2025, 7, 20, 10, 0), end: new Date(2025, 7, 20, 10, 30), title: 'Junta semanal Adhere', calendar: 'Elias Bardawil' },
    { start: new Date(2025, 7, 21, 18, 0), end: new Date(2025, 7, 21, 19, 0), title: 'Comité Cedars', description: 'Microsoft Teams Meeting', calendar: 'Elias Bardawil' },
    { start: new Date(2025, 7, 22, 11, 30), end: new Date(2025, 7, 22, 11, 45), title: 'Widú México Reunión Semanal', calendar: 'Firm' },
    { start: new Date(2025, 7, 22, 12, 30), end: new Date(2025, 7, 22, 14, 0), title: 'Seguimiento Ejecución', calendar: 'Tasks' },
    { start: new Date(2025, 7, 19, 19, 0), end: new Date(2025, 7, 19, 20, 0), title: 'Starboard - Estatus Asuntos Hunika', description: 'Reunión de Microsoft Teams', calendar: 'Elias Bardawil' },
];

const calendars = {
    'Elias Bardawil': 'bg-primary/20 border-primary text-primary-foreground',
    'Firm': 'bg-green-500/20 border-green-500 text-green-700',
    'Tasks': 'bg-orange-500/20 border-orange-500 text-orange-700',
    'Statute of Limitations': 'bg-red-500/20 border-red-500 text-red-700',
}

const getEventPosition = (event: CalendarEvent, day: Date, hourHeight: number) => {
    const startHour = event.start.getHours() + event.start.getMinutes() / 60;
    const endHour = event.end.getHours() + event.end.getMinutes() / 60;
    
    const top = (startHour - 7) * hourHeight;
    const height = (endHour - startHour) * hourHeight;

    return { top, height };
}

export default function CalendarPage() {
    const [view, setView] = useState<'day' | 'week' | 'work_week' | 'month' | 'agenda'>('week');
    const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 19));
    const [visibleCalendars, setVisibleCalendars] = useState<Record<string, boolean>>({
        'Elias Bardawil': true,
        'Firm': true,
        'Tasks': true,
        'Statute of Limitations': false
    });
    const timelineRef = useRef<HTMLDivElement>(null);
    const [currentTimePosition, setCurrentTimePosition] = useState(0);

    const weekStartsOn = 1; // Monday
    const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn });
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

    const hourHeight = 60; // height of one hour in pixels

    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();
            const currentHour = now.getHours() + now.getMinutes() / 60;
            setCurrentTimePosition((currentHour - 7) * hourHeight);
        };
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 60000); // Update every minute
        return () => clearInterval(interval);
    }, [hourHeight]);
    
    const goToPreviousWeek = () => {
        setCurrentDate(current => addDays(current, -7));
    };

    const goToNextWeek = () => {
        setCurrentDate(current => addDays(current, 7));
    };
    
    const goToToday = () => {
        setCurrentDate(new Date());
    }
    
    const handleCalendarVisibility = (name: string, checked: boolean) => {
        setVisibleCalendars(prev => ({...prev, [name]: checked}));
    }

  return (
    <div className="flex h-[calc(100vh-6rem)]">
        <div className="flex flex-col flex-grow">
            <header className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={goToToday}>Hoy</Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToPreviousWeek}><ChevronLeft className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToNextWeek}><ChevronRight className="h-4 w-4" /></Button>
                    <h2 className="text-lg font-semibold">
                        {format(startOfCurrentWeek, 'LLL d', { locale: es })} - {format(addDays(startOfCurrentWeek, 6), 'LLL d, yyyy', { locale: es })}
                    </h2>
                </div>
                <div className="flex items-center gap-1 bg-muted p-1 rounded-md">
                    <Button variant={view === 'agenda' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('agenda')} className="bg-white">Agenda</Button>
                    <Button variant={view === 'day' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('day')}>Día</Button>
                    <Button variant={view === 'week' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('week')} className={view === 'week' ? "bg-white" : ""}>Semana</Button>
                    <Button variant={view === 'work_week' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('work_week')}>Semana Laboral</Button>
                    <Button variant={view === 'month' ? 'outline' : 'ghost'} size="sm" onClick={() => setView('month')}>Mes</Button>
                    <Button variant="ghost" size="sm">Más <ChevronDown className="h-4 w-4 ml-1" /></Button>
                </div>
                 <div className="flex items-center gap-2">
                    <Button className="bg-primary hover:bg-primary/90">
                       <Plus className="mr-2 h-4 w-4" /> Nuevo evento
                    </Button>
                </div>
            </header>
            <div className="flex-grow overflow-auto">
                <div className="grid grid-cols-[auto,1fr]">
                     <div className="w-16 text-right text-xs text-muted-foreground pr-2">
                        <div className="h-8 flex items-center justify-end">Todo el día</div>
                        {Array.from({ length: 17 }, (_, i) => 7 + i).map(hour => (
                            <div key={hour} className="h-[60px] relative -top-2">
                                {hour > 0 && `${hour}:00`}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 relative">
                        <div className="col-span-7 grid grid-cols-7 sticky top-0 bg-background z-10 border-b">
                            {weekDays.map(day => (
                                <div key={day.toString()} className={cn("text-center p-2 border-r", isSameDay(day, currentDate) && "bg-yellow-100")}>
                                    <p className="text-sm">{format(day, 'eee', {locale: es})}</p>
                                    <p className="text-xl font-semibold">{format(day, 'd/MM', {locale: es})}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-7 grid grid-cols-7">
                           {weekDays.map(day => (
                                <div key={day.toString()} className="border-r relative">
                                    {Array.from({ length: 17 }).map((_, i) => (
                                        <div key={i} className="h-[60px] border-b"></div>
                                    ))}
                                    {events.filter(event => isSameDay(event.start, day) && visibleCalendars[event.calendar]).map(event => {
                                        const {top, height} = getEventPosition(event, day, hourHeight);
                                        const calendarClass = calendars[event.calendar as keyof typeof calendars] || 'bg-gray-200 border-gray-400 text-gray-800';
                                        return (
                                            <div
                                                key={event.title}
                                                className={cn("absolute w-[95%] p-2 rounded-lg text-xs border-l-4 overflow-hidden", calendarClass)}
                                                style={{ top: `${top}px`, height: `${height}px`}}
                                            >
                                                <p className="font-semibold">{event.title}</p>
                                                {event.description && <p>{event.description}</p>}
                                                <p>{format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                        {isToday(currentDate) && <div ref={timelineRef} className="absolute w-full h-px bg-red-500 z-20" style={{ top: `${currentTimePosition}px`}}>
                           <div className="h-2 w-2 rounded-full bg-red-500 absolute -left-1 -top-[3px]"></div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
        <aside className="w-64 border-l p-4 space-y-4">
             <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy', {locale: es})}</h2>
                <div className="flex">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setCurrentDate(current => addDays(current, -30))}><ChevronLeft className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setCurrentDate(current => addDays(current, 30))}><ChevronRight className="h-4 w-4" /></Button>
                </div>
            </div>
            <Calendar
                mode="single"
                selected={currentDate}
                onSelect={(date) => date && setCurrentDate(date)}
                className="p-0"
                month={currentDate}
                onMonthChange={setCurrentDate}
            />
            <div>
                <h3 className="font-semibold flex items-center justify-between">
                    Mis calendarios <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-2 mt-2">
                    {Object.entries(calendars).map(([name, className]) => (
                        <div key={name} className="flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <Checkbox 
                                    id={name} 
                                    checked={visibleCalendars[name]}
                                    onCheckedChange={(checked) => handleCalendarVisibility(name, !!checked)}
                                    className="data-[state=checked]:bg-primary"
                                />
                                <label htmlFor={name} className="text-sm">{name}</label>
                            </div>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                 <h3 className="font-semibold flex items-center justify-between">
                    Otros calendarios <ChevronDown className="h-4 w-4" />
                </h3>
            </div>
        </aside>
    </div>
  );
}
