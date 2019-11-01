import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  DataTable,
  Dropdown,
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
  TextInput,
  Tabs,
  Tab,
  Tile,
  TileGroup,
  RadioTile,
  SelectableTile,
  Button,
} from 'carbon-components-react';
import { ContentTile } from '../../components/Content';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import { Action } from 'rxjs/internal/scheduler/Action';
import { settings } from 'carbon-components';

const { prefix } = settings;

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
  selectableTile: {
    selected: false,
    handleClick: () => {},
  },
  dropdown: {
    label: '1.14 (latest)',
    type: 'inline',
  },
  templatesDropdown: {
    label: 'Trial Cluster',
    titleText: 'Templates',
  },
  resourcegroupDropdown: {
    label: 'Default',
    titleText: 'Resource Group',
  },
  geoDropdown: {
    label: 'North America',
    titleText: 'Geo',
  },
  availabilityDropdown: {
    label: 'Multizone',
    titleText: 'Availability',
  },
  metroDropdown: {
    label: 'Dallas',
    titleText: 'Metro',
  },
  clusterNameTextInput: {
    labelText: 'Cluster name',
    placeholder: 'dev-dal10',
    defaultValue: 'dev dal10',
  },
  tagsTextInput: {
    labelText: 'Tags',
    placeholder: 'dev, env: dev',
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
    name: 'Debug Tool',
    description:
      'LogDNA provides collection and search of events that occur on IBM Cloud Activity Tracker. Save searches…',
  },
];

const CreatePage = () => {
  return (
    <div className="container">
      <div className="main bx--grid bx--grid--no-gutter create-page">
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
                <div className="bx--grid bx--grid--full-width bx--grid--no-gutter create-page__tab-content">
                  <div className="bx--row">
                    <div className="bx--col-lg-4 bx--col-md-4">
                      <Dropdown
                        {...props.templatesDropdown}
                        items={'Trial Cluster, Single Node, High Availability'}
                        onChange={console.log()}
                      />
                    </div>
                  </div>

                  <h2 className="create-page__subheading">
                    Orchestration Service
                  </h2>
                  <p className="create-page__helper-text">
                    Information about your orchestration service.
                  </p>
                  <div className="bx--row ">
                    <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 create-page__input">
                      <Tile className="dropdown-tile">
                        <img
                          src={`${process.env.PUBLIC_URL}/kubernetes.png`}
                          alt="tbd"
                          className="dropdown-tile__icon"
                        />
                        <h3 className="dropdown-tile__heading">Kubernetes</h3>
                        <Dropdown
                          className="dropdown-tile__dropdown"
                          {...props.dropdown}
                          onChange={console.log()}
                        />
                      </Tile>
                    </div>
                  </div>

                  <h2 className="create-page__subheading">Infrastructure</h2>
                  <p className="create-page__helper-text">
                    Choose your environment, this will affect the subsequent
                    cluster configuration choices. Is location more important
                    for you?
                  </p>
                  <div
                    role="group"
                    aria-label="selectable tiles"
                    className="bx--row text-tile">
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-1" name="tiles">
                        <h3 className="text-tile__heading">Classic</h3>
                        <p className="text-tile__p">
                          Run your cluster with native subnet and VLAN
                          networking on our classic infrastructure.
                        </p>
                      </SelectableTile>
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-2" name="tiles">
                        <h3 className="text-tile__heading">VPC</h3>
                        <p className="text-tile__p">
                          Run your cluster with native subnet and VLAN
                          networking on our classic infrastructure.
                        </p>
                      </SelectableTile>
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-3" name="tiles">
                        <h3 className="text-tile__heading">Hyper Protect</h3>
                        <p className="text-tile__p">
                          Run your cluster with native subnet and VLAN
                          networking on our classic infrastructure.
                        </p>
                      </SelectableTile>
                    </div>
                  </div>

                  <h2 className="create-page__subheading">Metadata</h2>
                  <p className="create-page__helper-text">
                    Information about your cluster.
                  </p>
                  <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-6 create-page__input">
                      <TextInput type="text" {...props.clusterNameTextInput} />
                    </div>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-6 create-page__input">
                      <Dropdown
                        {...props.resourcegroupDropdown}
                        items={'Default'}
                        onChange={console.log()}
                      />
                    </div>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-6 create-page__input">
                      <TextInput type="text" {...props.tagsTextInput} />
                    </div>
                  </div>

                  <h2 className="create-page__subheading">Location</h2>
                  <p className="create-page__helper-text">
                    Choose your location, this will affect the subsequent
                    cluster configuration choices.
                  </p>
                  <div className="bx--row">
                    <div className="bx--col-lg-4 bx--col-md-6 create-page__input">
                      <Dropdown
                        {...props.geoDropdown}
                        items={'North America'}
                        onChange={console.log()}
                      />
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-6 create-page__input">
                      <Dropdown
                        {...props.availabilityDropdown}
                        items={'Multizone'}
                        onChange={console.log()}
                      />
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-6 create-page__input">
                      <Dropdown
                        {...props.metroDropdown}
                        items={'Dallas'}
                        onChange={console.log()}
                      />
                    </div>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col create-page__input">
                      <fieldset className={`${prefix}--fieldset`}>
                        <legend className={`${prefix}--label`}>
                          Worker zones
                        </legend>
                        <Checkbox
                          defaultChecked
                          {...{ labelText: 'Dallas 10' }}
                          id="checkbox-label-1"
                        />
                        <Checkbox
                          defaultChecked
                          {...{ labelText: 'Dallas 11' }}
                          id="checkbox-label-2"
                        />
                        <Checkbox
                          defaultChecked
                          {...{ labelText: 'Dallas 12' }}
                          id="checkbox-label-3"
                        />
                      </fieldset>
                    </div>
                  </div>

                  <h2 className="create-page__subheading">Workers</h2>
                  <p className="create-page__helper-text">
                    Choose your workers, this will not affect the subsequent
                    cluster configuration choices.
                  </p>

                  <h2 className="create-page__subheading">Addons</h2>
                  <p className="create-page__helper-text">
                    Choose your addons, this will not affect the subsequent
                    cluster configuration choices.
                  </p>
                  <div className="bx--row">
                    <div className="bx--col-lg-12 create-page__input">
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

                  <h2 className="create-page__subheading">Integrations</h2>
                  <p className="create-page__helper-text">
                    Choose your integrations, this will not affect the
                    subsequent cluster configuration choices.
                  </p>
                  <div
                    role="group"
                    aria-label="selectable tiles"
                    className="bx--row content-tile">
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-1" name="tiles">
                        <img
                          src={`${process.env.PUBLIC_URL}/sysdig.png`}
                          alt="tbd"
                          className="content-tile__icon"
                        />
                        <h3 className="content-tile__heading">LogDNA</h3>
                        <p className="content-tile__metadata">Third Party</p>
                        <p className="content-tile__description">
                          Some explanation about Sysdig and logging and
                          monitoring things. Keep it short and sweet.
                        </p>
                        <p className="content-tile__metadata">Integration</p>
                      </SelectableTile>
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-1" name="tiles">
                        <img
                          src={`${process.env.PUBLIC_URL}/sysdig.png`}
                          alt="tbd"
                          className="content-tile__icon"
                        />
                        <h3 className="content-tile__heading">SysDig</h3>
                        <p className="content-tile__metadata">Third Party</p>
                        <p className="content-tile__description">
                          Some explanation about Sysdig and logging and
                          monitoring things. Keep it short and sweet.
                        </p>
                        <p className="content-tile__metadata">Integration</p>
                      </SelectableTile>
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-1" name="tiles">
                        <img
                          src={`${process.env.PUBLIC_URL}/sysdig.png`}
                          alt="tbd"
                          className="content-tile__icon"
                        />
                        <h3 className="content-tile__heading">Key Protect</h3>
                        <p className="content-tile__metadata">IBM</p>
                        <p className="content-tile__description">
                          Some explanation about Sysdig and logging and
                          monitoring things. Keep it short and sweet.
                        </p>
                        <p className="content-tile__metadata">Integration</p>
                      </SelectableTile>
                    </div>
                    <div className="bx--col-lg-4 bx--col-md-4 create-page__input">
                      <SelectableTile id="tile-1" name="tiles">
                        <img
                          src={`${process.env.PUBLIC_URL}/sysdig.png`}
                          alt="tbd"
                          className="content-tile__icon"
                        />
                        <h3 className="content-tile__heading">
                          Activity Tracker
                        </h3>
                        <p className="content-tile__metadata">Third Party</p>
                        <p className="content-tile__description">
                          Some explanation about Sysdig and logging and
                          monitoring things. Keep it short and sweet.
                        </p>
                        <p className="content-tile__metadata">Integration</p>
                      </SelectableTile>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="About">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width create-page__tab-content">
                  <div className="bx--row create-page__section ">
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
      <aside className="aside">
        {/* order summary
        <Button>Save as</Button>
        <Button>Create</Button> */}
      </aside>
    </div>
  );
};

export default CreatePage;
