import React from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import "./dashboard.css";
import { PlusCircle } from "react-feather";

function Dashboard(props) {
  return (
    <Container fluid>
      <Row>
        <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="sidebar-sticky">
            <div className="text-center mb-4">
              <h5 className="text-muted ">Supermarket</h5>
              <Button variant="outline-danger" size="sm" block={false}>
                Sign Out
              </Button>
            </div>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
              <span>Products</span>
              <a className="d-flex align-items-center text-muted">
                <PlusCircle size={18} />
              </a>
            </h6>
          </div>
        </Nav>
      </Row>
    </Container>
  );
}

export default Dashboard;

// <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
//   <span>Saved reports</span>
//   <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
//   </a>
// </h6>
// <ul class="nav flex-column mb-2">
//   <li class="nav-item">
//     <a class="nav-link" href="#">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//       Current month
//     </a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//       Last quarter
//     </a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//       Social engagement
//     </a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
//       Year-end sale
//     </a>
//   </li>
// </ul>
