import {
  CheckIcon,
  XIcon,
  PauseIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import { ClockIcon } from '@heroicons/react/solid';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

const getInstructionBody = (name) => {
  const sshInstructions =
    name === 'Bastion'
      ? `SSH_PRIV_KEY_PATH=<path_to_priv_key>; SSH_USERNAME=<username>; ssh -v -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@bastion.watonomous.ca`
      : `SSH_PRIV_KEY_PATH=<path_to_priv_key>; SSH_USERNAME=<username>; ssh -v -o ProxyCommand="ssh -W %h:%p -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@bastion.watonomous.ca" -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@${name}.watocluster.local`;
  const instructionBody = `
  Access ${name}${
    name !== 'Bastion'
      ? ' by using Bastion as an [SSH jumphost](https://www.tecmint.com/access-linux-server-using-a-jump-host/)'
      : ''
  }:
  ~~~shell
  ${sshInstructions}
  ~~~
  `;
  return instructionBody;
};

const Check = ({ name, checksData }) => {
  const noInstructions = ['Ceph'];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className={`${
          !noInstructions.includes(name) && 'cursor-pointer'
        } text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6`}
        onClick={handleShow}
      >
        <div className="text-2xl text-gray-400 font-semibold flex items-center">
          {name}
          <InformationCircleIcon className="h-6 w-6 text-white mx-2" />
        </div>
        <hr style={{ borderColor: 'gray' }} />

        {checksData &&
          checksData.map((check, i) => {
            return (
              <div key={i} className="flex items-center my-2">
                <div
                  className={`rounded-full flex justify-center items-center p-1 mr-4 relative z-10 ${
                    {
                      up: 'bg-green-600',
                      down: 'bg-red-600',
                      paused: 'bg-gray-600',
                      grace: 'bg-yellow-600',
                    }[check.status]
                  }`}
                >
                  {
                    {
                      up: <CheckIcon className="h-3 w-3 text-white" />,
                      down: <XIcon className="h-3 w-3 text-white" />,
                      paused: <PauseIcon className="h-3 w-3 text-white" />,
                      grace: (
                        <ExclamationCircleIcon className="h-3 w-3 text-white" />
                      ),
                    }[check.status]
                  }
                </div>

                <div>
                  <h2 className="font-semibold">{check.serviceName}</h2>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>
                      {moment(check.last_ping).diff(moment(), 'days') > -100
                        ? moment(check.last_ping).fromNow()
                        : moment(check.last_ping).format('DD MMMM YYYY')}
                    </span>
                    {check.last_duration !== undefined &&
                      check.last_duration !== 0 && (
                        <span className="flex items-center ml-1">
                          <ClockIcon className="h-3 w-3 text-gray-500 mr-1" />
                          {check.last_duration} sec
                        </span>
                      )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {!noInstructions.includes(name) && (
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactMarkdown components={{ code: CodeBlock }}>
              {getInstructionBody(name)}
            </ReactMarkdown>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Check;
