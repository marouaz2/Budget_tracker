import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie } from 'recharts';

function Graph(props){
    return <div className='graph'>
        <div>
        <BarChart
          width={1000}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        <div>
        <PieChart width={300} height={350}>
          <Pie
            dataKey="price"
            isAnimationActive={true}
            data={props.data1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="price" data={props.data1} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </div>
        
        

    </div>
}

export default Graph;