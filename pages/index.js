import Head from 'next/head';
import {
  CheckIcon,
  XIcon,
  PauseIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';
import useSWR from 'swr';
import fetcher from '../libs/fetch';
import { useState } from 'react';
import Check from '../components/Check';
import { Button, Modal } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data: checks, error: errorChecks } = useSWR('/v2/checks/', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  });
  const vmOrder = [
    'delta-ubuntu1',
    'thor-ubuntu1',
    'tr-ubuntu1',
    'wato2-ubuntu1',
    'wato3-ubuntu1',
    'wato-bastion',
    'ceph-health',
  ];
  const cephHealth = 'ceph-health';
  const vmChecks = {};
  let checksTotal = 0;
  let checksError = 0;
  if (checks) {
    checks.checks.forEach((check) => {
      const publicTag = check.tags.split('public=')[1];
      if (publicTag == 'True') {
        checksTotal++;
        check.status == 'down' && checksError++;
        const cephChecks = check.tags.split('check=')[1].split(' ')[0];
        const name =
          cephChecks == cephHealth
            ? cephHealth
            : check.tags.split('host=')[1].split(' ')[0];
        check.serviceName = check.desc;
        if (!vmChecks[name]) {
          vmChecks[name] = {
            items: [check],
            storedItems: [check],
          };
        } else if (name == cephHealth) {
          if (check.status != 'up') {
            vmChecks[name][0] = check;
          }
          vmChecks[name].storedItems.push(check);
        } else {
          vmChecks[name].items.push(check);
        }
      }
    });
  }
  const serverInstructions = `
  1. Fill out the [onboarding form](https://watonomous.github.io/infra-config/onboarding-form) to request access to the server cluster. Please make sure to provide a valid SSH public key in the form.
  1. Have your WATcloud point-of-contact (e.g. your manager, tech lead, student design team lead, or designated infrastructure support member) approve your request and trigger the provisioning script.
  1. After your request is approved, you should receive a [GitHub invitation](https://github.com/orgs/WATonomous/invitation) for the WATonomous organization in your email.
  1. Accept your [GitHub invitation](https://github.com/orgs/WATonomous/invitation).
  1. Read over the [user manual](https://github.com/WATonomous/infrastructure-support/blob/main/MANUAL.md). This is accessible after you have accepted your GitHub invitation.
  1. SSH into our Bastion server. This is the entrypoint to our cluster:

  ~~~shell
  ssh -i <path_to_priv_key> <username>@bastion.watonomous.ca
  ~~~

  \\
  **Tech support** \\
  Find support resources in our [infrastructure-support repo](https://github.com/WATonomous/infrastructure-support)! Access to this repo is granted as a part of the access request approval process.
  
  \\
  **Collaboration** \\
  If you are a student design team/project lead and would like WATcloud access for you and your team. Please reach out to [infra-outreach@watonomous.ca](mailto:infra-outreach@watonomous.ca).
  `;

  return (
    <div>
      <Head>
        <title>{'WATonomous Services'}</title>
        <meta name="description" content="All your healtchecks at a glance" />
        <meta property="og:title" content={'WATonomous Services'} />
        <meta property="og:image" content="og_image.png" />
        <meta
          property="og:description"
          content="All your healtchecks at a glance"
        />
        <link
          rel="icon"
          href={`/${checksError ? 'favicon-error.ico' : 'favicon.ico'}`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 user-scalable=no"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {errorChecks && (
          <div className="text-center m-8">
            <div className="bg-red-600 h-16 w-16 p-3 rounded-full flex items-center justify-center mx-auto mb-3">
              <XIcon className="w-full text-white" />
            </div>
            <h1 className="text-red-500 font-bold text-xl">
              There was an error fetching the API
            </h1>
          </div>
        )}

        {checks && (
          <div className="my-5">
            <div className="w-36 h-36 relative mx-auto my-1s">
              <div
                className={`rounded-full absolute inset-6 bg-gradient-to-b ${
                  checksError
                    ? 'from-red-400 border-red-500'
                    : 'from-green-400 border-green-500'
                } border-2 opacity-20 z-0 animate-ping-slow`}
              ></div>
              <div
                className={`rounded-full absolute inset-4 ${
                  checksError ? 'bg-red-400' : 'bg-green-400'
                } bg-opacity-10 z-10 animate-pulse`}
              ></div>
              <div
                className={`rounded-full absolute inset-6 inse bg-gradient-to-b ${
                  checksError
                    ? 'from-red-500 to-red-600 border-red-500'
                    : 'from-green-500 to-green-600 border-green-500'
                } border-4  z-20`}
              ></div>
            </div>
            <h1
              className={`${
                checksError ? 'text-red-500' : 'text-green-400'
              } font-bold text-center text-xl`}
            >
              {checksError
                ? `${checksError} ${checksError == 1 ? 'error' : 'errors'}`
                : `${checksTotal} ${
                    checksTotal == 1 ? 'check' : 'checks'
                  }, all fine 😌`}
            </h1>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="bg-blue-800 p-2 rounded" onClick={handleShow}>
            <p className="text-white">Request Server Access</p>
          </button>
        </div>
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>WATcloud Server Access Instructions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactMarkdown components={{ code: CodeBlock }}>
              {serverInstructions}
            </ReactMarkdown>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="flex justify-center items-center my-2 p-3">
          <CheckIcon className="rounded-full text-white h-5 w-5 bg-green-600" />
          <p style={{ color: 'white', marginRight: 10, marginLeft: 4 }}>
            No Issues
          </p>
          <XIcon className="rounded-full h-5 w-5 text-white bg-red-600" />{' '}
          <p style={{ color: 'white', marginRight: 10, marginLeft: 4 }}>
            Outage
          </p>
        </div>

        {checks && (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {vmChecks &&
              Object.entries(vmChecks)
                .sort((vm1, vm2) => {
                  return vmOrder.indexOf(vm1[0]) - vmOrder.indexOf(vm2[0]);
                })
                .map(([vmName, vmChecksData], i) => (
                  <Check
                    key={i}
                    name={vmName}
                    checksData={vmChecksData.items}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
}
