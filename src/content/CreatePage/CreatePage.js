import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';
import { ContentTile } from '../../components/Content';
import Globe32 from '@carbon/icons-react/lib/globe/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const headers = [
  {
    key: 'name',
    header: 'Tool name',
  },
  {
    key: 'description',
    header: 'Description',
  },
];

const rows = [
  {
    id: '1',
    name: 'Managed Istio',
    description:
      'LogDNA provides collection and search of events that occur on IBM Cloud Activity Tracker. Save searches…',
  },
  {
    id: '2',
    name: 'Managed Knative',
    description:
      'LogDNA provides collection and search of events that occur on IBM Cloud Activity Tracker. Save searches…',
  },
  {
    id: '3',
    name: 'Key Protect',
    description:
      'LogDNA provides collection and search of events that occur on IBM Cloud Activity Tracker. Save searches…',
  },
  {
    id: '4',
    name: 'Debug Tool',
    description:
      'LogDNA provides collection and search of events that occur on IBM Cloud Activity Tracker. Save searches…',
  },
];

const CreatePage = () => {
  return (
    <div className="bx--grid bx--grid--full-width create-page">
      <div className="bx--row create-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Catalog</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="create-page__heading">Kubernetes Cluster</h1>
          <img
            className="create-page__illo"
            src={`${process.env.PUBLIC_URL}/kubernetes.png`}
            alt="Kubernetes illustration"
          />
        </div>
      </div>
      <div className="bx--row create-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Create">
              <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
                <div className="bx--row create-page__tab-content">
                  <div className="bx--col">
                    <div className="bx--row create-page__templates">
                      <div className="bx--col-lg-4">Template</div>
                    </div>
                    <div className="bx--row create-page__orchestration">
                      <div className="bx--col-lg-8">
                        <h2 className="create-page__subheading">
                          Orchestration Service
                        </h2>
                      </div>
                    </div>
                    <div className="bx--row create-page__infrastructure">
                      <div className="bx--col-lg-12">
                        <h2 className="create-page__subheading">
                          Infrastructure
                        </h2>
                        <p className="create-page__helper-text">
                          Choose your environement, this will affect the
                          subsequent cluster configuration choices. Is location
                          more important for you?
                        </p>
                      </div>
                    </div>
                    <div className="bx--row create-page__location">
                      <div className="bx--col-lg-12">
                        <h2 className="create-page__subheading">Location</h2>
                        <p className="create-page__helper-text">
                          Choose your location, this will affect the subsequent
                          cluster configuration choices.
                        </p>
                      </div>
                    </div>
                    <div className="bx--row create-page__metadata">
                      <div className="bx--col-lg-8">
                        <h2 className="create-page__subheading">Metadata</h2>
                      </div>
                    </div>
                    <div className="bx--row create-page__workers">
                      <div className="bx--col-lg-15">
                        <h2 className="create-page__subheading">Workers</h2>
                        <p className="create-page__helper-text">
                          Choose your workers, this will not affect the
                          subsequent cluster configuration choices.
                        </p>
                      </div>
                    </div>
                    <div className="bx--row create-page__addons">
                      <div className="bx--col-lg-12">
                        <h2 className="create-page__subheading">Addons</h2>
                        <p className="create-page__helper-text">
                          Choose your addons, this will not affect the
                          subsequent cluster configuration choices.
                        </p>
                        <DataTable
                          className="create-page__addons-table"
                          rows={rows}
                          headers={headers}
                          render={({
                            rows,
                            headers,
                            getHeaderProps,
                            getRowProps,
                            getTableProps,
                          }) => (
                            <TableContainer>
                              <Table {...getTableProps()}>
                                <TableHead>
                                  <TableRow>
                                    <TableExpandHeader />
                                    {headers.map(header => (
                                      <TableHeader
                                        {...getHeaderProps({ header })}>
                                        {header.header}
                                      </TableHeader>
                                    ))}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map(row => (
                                    <React.Fragment key={row.id}>
                                      <TableExpandRow {...getRowProps({ row })}>
                                        {row.cells.map(cell => (
                                          <TableCell key={cell.id}>
                                            {cell.value}
                                          </TableCell>
                                        ))}
                                      </TableExpandRow>
                                      <TableExpandedRow
                                        colSpan={headers.length + 1}>
                                        <p>Row description</p>
                                      </TableExpandedRow>
                                    </React.Fragment>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          )}
                        />
                      </div>
                    </div>
                    <div className="bx--row create-page__integrations">
                      <div className="bx--col-lg-16">
                        <h2 className="create-page__subheading">
                          Integrations
                        </h2>
                        <p className="create-page__helper-text">
                          Choose your integrations, this will not affect the
                          subsequent cluster configuration choices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row create-page__tab-content">
                  <div className="bx--col-lg-16">
                    All about Kubernetes Service.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
