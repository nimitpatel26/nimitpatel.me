import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';

import { Menu, Card } from 'antd';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <div className="app">
          <h1>nimitpatel.me</h1>
          <Menu mode="horizontal">
              <Menu.Item key="1">About</Menu.Item>
              <Menu.Item key="2">Work Experience</Menu.Item>
              <Menu.Item key="3">Education</Menu.Item>
              <Menu.Item key="4">Projects</Menu.Item>
              <Menu.Item key="5">Resume</Menu.Item>
          </Menu>
          <Card title="Johns Hopkins University" className="Card">
              <p>M.S. in Computer Science</p>
              <p>3.5/4.0 GPA</p>
              <p>Spring 2022</p>
              <p>Coursework: Cloud Computing, Computer Architecture, Principles of Web Development</p>
          </Card>
          <Card title="University of Maryland, Baltimore County" className="Card">
              <p>B.S. in Computer Science</p>
              <p>3.69 /4.0 Major GPA</p>
              <p>December 2019</p>
              <p>Coursework: Natural Language Processing, Machine Learning, Algorithms, Data Structures, Computer Security, Computer Networks, Operating Systems, Computer Architecture, Database Management</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores at commodi consequatur ea
                  earum facere ipsa nam nemo numquam praesentium provident quaerat, qui. Ab aliquam culpa est id
                  perferendis repudiandae vero. Accusamus architecto earum eveniet, nesciunt quo ratione. Consequatur
                  cumque cupiditate, dolor dolores eligendi hic id illum, incidunt ipsam iusto laudantium non optio
                  provident quis quo quod, reiciendis repellendus repudiandae vel velit? A atque explicabo facere
                  incidunt labore, maiores officiis perspiciatis praesentium, quam repellendus reprehenderit rerum sequi
                  tempore veniam voluptatum. Adipisci aspernatur assumenda consectetur consequuntur corporis culpa cum
                  dolores dolorum eos error eum, explicabo in iure magnam minus modi officia omnis optio ratione sed
                  tempora, tenetur ullam. Ab asperiores, dignissimos est laboriosam perferendis tenetur totam. A ab
                  accusantium ad assumenda at autem commodi, debitis dolor error est et excepturi facere fugit hic ipsa
                  iure labore magnam maiores maxime nisi nulla omnis pariatur placeat praesentium quae quaerat quam qui
                  quos saepe sit sunt ullam voluptate voluptates. Enim impedit reprehenderit voluptatibus. Aperiam
                  architecto asperiores, autem delectus deserunt dolore, doloribus ducimus eaque eius eligendi esse
                  explicabo illo ipsa, iure labore molestias mollitia nobis praesentium quaerat quo recusandae
                  reiciendis repellat sed similique sint tenetur ut? Ad expedita laboriosam quas! Eaque eveniet sequi
                  voluptates!</p>
          </Card>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);



