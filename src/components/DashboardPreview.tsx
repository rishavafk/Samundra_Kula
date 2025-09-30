import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Map, TrendingUp, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('heatmap');

  const sedimentData = [
    { location: 'Site A', coarse: 30, medium: 45, fine: 25 },
    { location: 'Site B', coarse: 20, medium: 50, fine: 30 },
    { location: 'Site C', coarse: 40, medium: 35, fine: 25 },
    { location: 'Site D', coarse: 25, medium: 40, fine: 35 },
    { location: 'Site E', coarse: 35, medium: 45, fine: 20 }
  ];

  const trendData = [
    { month: 'Jan', erosion: 12, deposition: 8 },
    { month: 'Feb', erosion: 15, deposition: 10 },
    { month: 'Mar', erosion: 10, deposition: 14 },
    { month: 'Apr', erosion: 18, deposition: 12 },
    { month: 'May', erosion: 14, deposition: 16 },
    { month: 'Jun', erosion: 20, deposition: 15 }
  ];

  const distributionData = [
    { name: 'Coarse Sand', value: 30, color: '#0074d9' },
    { name: 'Medium Sand', value: 45, color: '#39cccc' },
    { name: 'Fine Sand', value: 25, color: '#7fdbff' }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-[#f0fffe] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0074d9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#39cccc]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#0074d9]/10 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0074d9]">Dashboard</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-[#001f3f]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powerful{' '}
            <span className="bg-gradient-to-r from-[#0074d9] to-[#39cccc] bg-clip-text text-transparent">
              Data Insights
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visualize sediment patterns, track coastal changes, and make data-driven decisions
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-[#7fdbff]/30 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-[#001f3f] to-[#0074d9] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-white mb-1">SAMUDRAKULA Dashboard</h3>
                  <p className="text-[#7fdbff]">Real-time Coastal Monitoring System</p>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Activity className="w-5 h-5 text-[#ffdc00]" />
                  <span className="text-white">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              <Tabs defaultValue="heatmap" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="heatmap" className="flex items-center gap-2">
                    <Map className="w-4 h-4" />
                    Heatmap
                  </TabsTrigger>
                  <TabsTrigger value="classification" className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    Classification
                  </TabsTrigger>
                  <TabsTrigger value="trends" className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Trends
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="heatmap" className="space-y-6">
                  {/* Heatmap Simulation */}
                  <div className="relative h-80 bg-gradient-to-br from-[#001f3f] to-[#0074d9] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-4">
                      {Array.from({ length: 48 }).map((_, i) => {
                        const intensity = Math.random();
                        let color = '#0074d9';
                        if (intensity > 0.7) color = '#ff851b';
                        else if (intensity > 0.4) color = '#ffdc00';
                        else if (intensity > 0.2) color = '#39cccc';
                        else color = '#7fdbff';
                        
                        return (
                          <motion.div
                            key={i}
                            className="rounded"
                            style={{ backgroundColor: color }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ duration: 0.5, delay: i * 0.01 }}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                          />
                        );
                      })}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-sm text-[#001f3f]">Sediment Distribution Heatmap</p>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    {[
                      { color: '#7fdbff', label: 'Very Fine' },
                      { color: '#39cccc', label: 'Fine' },
                      { color: '#ffdc00', label: 'Medium' },
                      { color: '#ff851b', label: 'Coarse' }
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="classification" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Bar Chart */}
                    <div className="bg-[#f0fffe] rounded-xl p-6">
                      <h4 className="text-lg text-[#001f3f] mb-4">Site Comparison</h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={sedimentData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#7fdbff" />
                          <XAxis dataKey="location" stroke="#001f3f" />
                          <YAxis stroke="#001f3f" />
                          <Tooltip />
                          <Bar dataKey="coarse" fill="#0074d9" />
                          <Bar dataKey="medium" fill="#39cccc" />
                          <Bar dataKey="fine" fill="#7fdbff" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-[#f0fffe] rounded-xl p-6">
                      <h4 className="text-lg text-[#001f3f] mb-4">Overall Distribution</h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={distributionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={(entry) => `${entry.name}: ${entry.value}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {distributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trends" className="space-y-6">
                  <div className="bg-[#f0fffe] rounded-xl p-6">
                    <h4 className="text-lg text-[#001f3f] mb-4">Erosion vs Deposition Trends</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#7fdbff" />
                        <XAxis dataKey="month" stroke="#001f3f" />
                        <YAxis stroke="#001f3f" />
                        <Tooltip />
                        <Line type="monotone" dataKey="erosion" stroke="#ff851b" strokeWidth={3} dot={{ fill: '#ff851b', r: 5 }} />
                        <Line type="monotone" dataKey="deposition" stroke="#39cccc" strokeWidth={3} dot={{ fill: '#39cccc', r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: 'Total Samples', value: '1,247', change: '+12%', color: 'text-[#39cccc]' },
                      { label: 'Coverage Area', value: '45 km²', change: '+8%', color: 'text-[#0074d9]' },
                      { label: 'Active Sites', value: '23', change: '+3', color: 'text-[#ffdc00]' }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg p-4 border border-[#7fdbff]/20">
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl text-[#001f3f] mb-1">{stat.value}</p>
                        <p className={`text-sm ${stat.color}`}>{stat.change} this month</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}