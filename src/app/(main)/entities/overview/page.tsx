
'use client';

import {
  ChevronDown,
  ChevronRight,
  Download,
  FilePlus,
  History,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';


const shareClasses = [
  {
    class: 'A',
    color: 'hsl(var(--chart-2))',
    shares: 71932,
    percentage: 27.97,
    voting: 'Single',
    economic: ['Preferred dividend rights', 'Liquidation preference'],
    description: ['Special majorities', 'Board composition'],
  },
  {
    class: 'B',
    color: 'hsl(var(--chart-3))',
    shares: 185208,
    percentage: 72.03,
    voting: 'Single',
    economic: [],
    description: [],
  },
];

const chartData = shareClasses.map((item) => ({
  name: item.class,
  value: item.shares,
  fill: item.color,
}));
const totalShares = shareClasses.reduce((sum, item) => sum + item.shares, 0);

export default function EntitiesOverviewPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Acme NV/SA</span>
            <ChevronRight className="h-4 w-4" />
            <span>Securities</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Shares</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            Shares
            <Badge variant="outline" className="text-sm font-normal">
              Last operation executed on 27 June 2022
            </Badge>
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <History className="mr-2 h-4 w-4" /> Version history
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <FilePlus className="mr-2 h-4 w-4" /> New transaction{' '}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="shareholders">Shareholders</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="ubo">UBO</TabsTrigger>
          <TabsTrigger value="notes">Shareholder notes</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="space-y-8">
            <Alert className="bg-blue-50 border-blue-200 text-blue-900">
              <div className="flex justify-between items-start">
                <div>
                  <AlertTitle className="font-bold text-lg">
                    Export a compliant register with a few simple clicks
                  </AlertTitle>
                  <AlertDescription>
                    Corporify offers a fully digital managed share register. No
                    more paper book required. This register is fully compliant
                    with the Belgian Companies Code.
                  </AlertDescription>
                  <div className="mt-4 flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Export register
                    </Button>
                    <Button variant="ghost" className="text-blue-700">
                      Ok, I got it
                    </Button>
                  </div>
                </div>
                <div
                  className="w-32 h-32 bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('https://placehold.co/128x128.png')",
                  }}
                  data-ai-hint="documents illustration"
                />
              </div>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Total shares</p>
                  <p className="text-2xl font-bold">257.140</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Par value</p>
                  <p className="text-2xl font-bold">€ 418,99</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Share capital
                  </p>
                  <p className="text-2xl font-bold">€ 107.740.252,12</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Share premium
                  </p>
                  <p className="text-2xl font-bold">€ 262.202,80</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Amounts are linked to:
                  </p>
                  <p className="text-2xl font-bold">Shareholders</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Share classes</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-[1fr_200px] gap-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Number of shares</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead>Voting rights</TableHead>
                      <TableHead>Economic rights</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shareClasses.map((share) => (
                      <TableRow key={share.class}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded-sm"
                              style={{ backgroundColor: share.color }}
                            />
                            {share.class}
                          </div>
                        </TableCell>
                        <TableCell>{share.shares.toLocaleString()}</TableCell>
                        <TableCell>{share.percentage.toFixed(2)}%</TableCell>
                        <TableCell>{share.voting}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            {share.economic.map((right) => (
                              <Badge
                                key={right}
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {right}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-xs">
                            {share.description.map((desc) => (
                              <span
                                key={desc}
                                className="flex items-center gap-2"
                              >
                                <Users className="h-3 w-3" /> {desc}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex items-center justify-center">
                  <ChartContainer
                    config={{}}
                    className="w-full h-[200px]"
                  >
                    <PieChart>
                      <ChartTooltip
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        strokeWidth={5}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-foreground text-center"
                      >
                        <tspan x="50%" y="45%" className="text-2xl font-bold">
                          {totalShares.toLocaleString()}
                        </tspan>
                        <tspan
                          x="50%"
                          y="60%"
                          className="text-sm text-muted-foreground"
                        >
                          Shares
                        </tspan>
                      </text>
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
