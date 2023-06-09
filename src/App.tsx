import React from 'react'
import { Graph } from '@antv/x6'
import { Node } from '@antv/x6'
import './App.css';

const data = {
  nodes: [
    // resistor node
    {
      id: 'resistor',
      x: 320,
      y: 120,
      width: 200,
      height: 200,
      markup: [
        // {
        //   tagName: 'rect',
        //   selector: 'body',
        // },
        {
          tagName: 'path',
          selector: 'rect',
          attrs: {
            d: 'M30,70 h 140 v 60 h -140 v -60',
          },
        },
        {
          tagName: 'path',
          selector: 'line1',
          groupSelector: 'line',
          attrs: {
            d: 'M10,100 h 20',
          },
        },
        {
          tagName: 'path',
          selector: 'line2',
          groupSelector: 'line',
          attrs: {
            d: 'M170,100 h 20',
          },
        },
        {
          tagName: 'text',
          selector: 'title',
        },
        {
          tagName: 'text',
          selector: 'parameter1',
        },
      ],
      attrs: {
        body: {
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: 'rgba(95,149,255,0.05)',
          refWidth: 2,
          refHeight: 2,
        },
        rect: {
          stroke: '#0000FF',
        },
        line: {
          stroke: '#0000FF',
        },
        title: {
          text: 'resistor',
          refX: 100,
          refY: 60,
          fontSize: 12,
          fill: '#0000FF',
          'text-anchor': 'middle',
        },
        parameter1: {
          text: 'R=R',
          refX: 100,
          refY: 142,
          fontSize: 12,
          'text-anchor': 'middle',
        },
      },
      ports: {
        groups: {
          group1: {
            position: {
              name: 'absolute',
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'group1',
            args: {
              x : 0,
              y: 100,
            },
            markup: [
              {
                tagName: 'path',
                selector: 'rect',
              },
            ],
            attrs: {
              rect: {
                d: 'M-10,-10 h 20 v 20 h -20 v -20',
                magnet: true,
                stroke: '#0000FF',
                fill: '#0000FF',
              },
            }
          },
          {
            id: 'port2',
            group: 'group1',
            args: {
              x : 200,
              y: 100,
            },
            markup: [
              {
                tagName: 'path',
                selector: 'rect',
              },
            ],
            attrs: {
              rect: {
                d: 'M-10,-10 h 20 v 20 h -20 v -20',
                magnet: true,
                stroke: '#0000FF',
                fill: '#FFFFFF',
              },
            }
          },
        ],
      },
    },
    // ground node
    {
      id: 'ground',
      x: 600,
      y: 300,
      width: 200,
      height: 200,
      markup: [
        // {
        //   tagName: 'rect',
        //   selector: 'body',
        // },
        {
          tagName: 'path',
          selector: 'line1',
          groupSelector: 'line',
          attrs: {
            d: 'M100,10 v 40',
          },
        },
        {
          tagName: 'path',
          selector: 'line2',
          groupSelector: 'line',
          attrs: {
            d: 'M40,50 h 120',
          },
        },
        {
          tagName: 'path',
          selector: 'line3',
          groupSelector: 'line',
          attrs: {
            d: 'M60,80 h 80',
          },
        },
        {
          tagName: 'path',
          selector: 'line4',
          groupSelector: 'line',
          attrs: {
            d: 'M80,100 h 40',
          },
        },
        {
          tagName: 'text',
          selector: 'title',
        },
      ],
      attrs: {
        body: {
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: 'rgba(95,149,255,0.05)',
          refWidth: 2,
          refHeight: 2,
        },
        rect: {
          stroke: '#0000FF',
        },
        line: {
          stroke: '#0000FF',
        },
        title: {
          text: 'ground',
          refX: 100,
          refY: 142,
          fontSize: 15,
          fill: '#0000FF',
          'text-anchor': 'middle',
        },
        parameter1: {
          text: 'R=R',
          refX: 100,
          refY: 142,
          fontSize: 12,
          'text-anchor': 'middle',
        },
      },
      ports: {
        groups: {
          group1: {
            position: {
              name: 'absolute',
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'group1',
            args: {
              x : 0,
              y: 100,
            },
            markup: [
              {
                tagName: 'path',
                selector: 'rect',
              },
            ],
            attrs: {
              rect: {
                d: 'M90,-110 h 20 v 20 h -20 v -20',
                magnet: true,
                stroke: '#0000FF',
                fill: '#0000FF',
              },
            }
          },
        ],
      },
    },
  ],
  edges: [
    {
      source: {
        cell: 'resistor',
        port: 'port1',
      },
      target: {
        cell: 'ground',
        port: 'port1',
      },
      vertices: [
        { x: 320, y: 219 },
        { x: 320, y: 298 },
      ]
    }
  ],
};

export default class App extends React.Component {
  private container: HTMLDivElement
  private graph: Graph

  componentDidMount() {
    this.graph = new Graph({
      container: this.container,
    });

    // this.graph.on('edge:added', ({ edge }) => {
    //   console.log(edge.getSource());
    //   console.log(edge.getTarget());
    // })

    this.graph.fromJSON(data);
    //this.start()
  }

  start() {
    let root;
    const v = document.createElement('div');
    const h = document.createElement('div');
    const c = document.createElement('div'); 

    window.addEventListener('load', (e)=> {

      root = document.getElementById('root')!

      v.style.position = 'absolute'
      v.style.width = '1px'
      v.style.top = '0'
      v.style.bottom = '0'
      v.style.left = '-100px'
      v.style.zIndex = `99`
      v.style.borderLeft = '1px dashed red'

      h.style.position = 'absolute'
      h.style.height = '1px'
      h.style.left = '0'
      h.style.right = '0'
      h.style.top = '-100px'
      h.style.zIndex = `99`
      h.style.borderTop = '1px dashed red'

      c.style.position = 'absolute'
      c.style.display = 'inline-block'
      c.style.fontSize = '12px'
      c.style.zIndex = `99`
      c.style.padding = '4px 8px'
      c.style.borderRadius = '2px'
      c.style.lineHeight = '20px'
      c.style.background = '#f6ffed'
      c.style.border = '1px solid #b7eb8f'

      root.appendChild(v)
      root.appendChild(h)
      root.appendChild(c)
    });

    document.addEventListener('mousemove', (e) => {
      const target = e.target as HTMLElement
      if (
        this.container.contains(target) ||
        this.container === target ||
        target === v ||
        target === h ||
        target === c
      ) {
        const pageX = e.pageX
        const pageY = e.pageY
        const clientX = e.clientX
        const clientY = e.clientY
        v.style.left = `${pageX + 2}px`
        h.style.top = `${pageY + 2}px`

        c.style.left = `${pageX + 10}px`
        c.style.top = `${pageY + 10}px`

        const p1 = this.graph.pageToLocal(pageX, pageY)
        const p2 = this.graph.localToPage(p1)
        const p3 = this.graph.localToClient(p1)
        const p4 = this.graph.localToGraph(p1)

        c.innerHTML = `
      <div>Mouse Page Position(e.pageX, e.pageY): ${pageX} x ${pageY}</div>
      <div>Mouse Client Position(e.clientX, e.clientY): ${clientX} x ${clientY}</div>
      <div>Local Position: ${p1.x} x ${p1.y}</div>
      <div>Local to Page: ${p2.x} x ${p2.y}</div>
      <div>Local to Client: ${p3.x} x ${p3.y}</div>
      <div>Local to Graph: ${p4.x} x ${p4.y}</div>
      `
      } else {
        v.style.left = `${-1000}px`
        h.style.top = `${-1000}px`
        c.style.left = `${-10000}px`
        c.style.top = `${-10000}px`
      }
    })
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  }

  render() {
    return (
      <div className="App">
        <div className="App-content" ref={this.refContainer} />
      </div>
    )
  }
}