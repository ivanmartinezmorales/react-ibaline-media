import React, { Component } from "react";
import { Table } from "reactstrap";

// data
const PackageFeatures = [
  {
    id: 1,
    feature: "Social Media Posts"
  },
  {
    id: 2,
    feature: "Monthly Meetings"
  },
  {
    id: 3,
    feature: "Add Feature Here"
  },
  {
    id: 4,
    feature: "A/B Testing"
  },
  {
    id: 5,
    feature: "Ad Campaigns"
  }
];

const PackageContent = [
  {
    id: 1,
    title: "Start Up",
    description: "For small Businesses and Startups",
    extendedDesc: "",
    btnText: "Start Now!"
  },
  {
    id: 2,
    title: "Level Up",
    description: "For Growing Activities",
    extendedDesc: "",
    btnText: "Contact Us"
  },
  {
    id: 3,
    title: "Success",
    description: "For Big Firms and Companies",
    btnText: "Let's Get Started"
  }
];

const TableHeaderItem = ({ id, title, description, btnText }) => {
  return (
    <th class="text-center">
      <h3>{title}</h3>
      <a class="btn btn-primary" href="#contact">
        {btnText}
      </a>
    </th>
  );
};

const TableHeaderRow = ({ PackageContent }) => {
  return PackageContent.map(item => (
    <TableHeaderItem {...item} key={item.id} />
  ));
};

const TableHeader = () => {
  return (
    <thead className="align-center">
      <tr>
        <th />

        <TableHeaderRow PackageContent={PackageContent} />
      </tr>

      <tr>
        <td />

        <td>Small business and startups</td>

        <td>Growing activities</td>

        <td>Big firms and companies</td>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody className="text-center">
      <tr>
        <td>One</td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>

      <tr>
        <td>Two</td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>

      <tr>
        <td>Three</td>

        <td />

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>

      <tr>
        <td>Four</td>

        <td />

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>

      <tr>
        <td>Five</td>

        <td />

        <td />

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>

      <tr>
        <td>Six</td>

        <td />

        <td />

        <td>
          <i class="fa fa-check fa-lg text-muted" />
        </td>
      </tr>
    </tbody>
  );
};

class Packages extends React.Component {
  render() {
    return (
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Table>
                <TableHeader />
                <TableBody />
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;
