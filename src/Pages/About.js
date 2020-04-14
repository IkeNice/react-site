import React, { Component } from 'react'
import { Container, Tab, Col, Row, Nav } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tab" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img alt="Desing" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu nisi ac justo rhoncus sagittis.
                    Fusce rutrum est in suscipit interdum.
                    Nam quis augue eget.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h3>Our team!</h3>
                  <img alt="Team" src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu nisi ac justo rhoncus sagittis.
                    Fusce rutrum est in suscipit interdum.
                    Nam quis augue eget.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img alt="Programmimng" src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/Best-Programming-Languages.png" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu nisi ac justo rhoncus sagittis.
                    Fusce rutrum est in suscipit interdum.
                    Nam quis augue eget.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img alt="Frameworks" src="https://webitfactory.io/wp-content/uploads/2019/11/webitjsframeworks.png" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu nisi ac justo rhoncus sagittis.
                    Fusce rutrum est in suscipit interdum.
                    Nam quis augue eget.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img alt="Libraries" src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu nisi ac justo rhoncus sagittis.
                    Fusce rutrum est in suscipit interdum.
                    Nam quis augue eget.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
