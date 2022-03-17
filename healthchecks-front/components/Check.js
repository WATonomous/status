import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { PauseIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/solid";
import { Modal, Button } from "react-bootstrap"
import { CopyBlock, atomOneLight } from "react-code-blocks";
import moment from "moment";
import { useState } from "react";

const getInstructionBody = (name, machineName) => {
    if (name === "Bastion") {
      return (
        <>
          <CopyBlock
            text={`ssh <username>@bastion.watonomous.ca`}
            language="shell"
            theme={atomOneLight}
            showLineNumbers={false}
            codeBlock
          />
        </>
      );
    } else {
      return (
        <>
          <h1><b>Option 1: Teleport (Web UI)</b></h1>
          Log into the
          <a className="text-blue-500" href="https://watonomous.teleport.sh/">
              {" "} Teleport Web UI  {" "}
          </a>
          using the &quot;GitHub (WATonomous)&quot; option. The interface should be self-explanatory.
          <br/>
          <br/>
          <h1><b>Option 2: Teleport (CLI)</b></h1>
          <CopyBlock
            text={`tsh login --proxy watonomous.teleport.sh --auth watonomous_github_connector \ntsh ssh <username>@${name}`}
            language="shell"
            theme={atomOneLight}
            showLineNumbers={false}
            codeBlock
          />
          <br/>
          <h1><b>Option 3: Bastion</b></h1>
          <CopyBlock
            text={`ssh -i </path/to/ssh_key.pub> -J <username>@bastion.watonomous.ca <username>@${machineName}`}
            language="shell"
            theme={atomOneLight}
            showLineNumbers={false}
            codeBlock
          />
        </>
      );
    }
}

const Check = ({ name, checksData, FQDN, machineName }) => {
    const noInstructions = ["Ceph"]
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div
            className={`${!noInstructions.includes(name) && 'cursor-pointer'} text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6`}
            onClick={handleShow}
        >
            <h1 className="text-2xl text-gray-400 font-semibold mb-1 leading-tight">{name}</h1>
            {/* keeping FQDN out for now. Might be used in future */}
            {/* {FQDN &&
            <h2 className="text-1m text-gray-400 font-semibold mb-1 ">FQDN: {FQDN}</h2>
            } */}
            <hr style={{"borderColor": "gray"}}/>

            {checksData &&
                checksData
                    .sort((a, b) => {
                        const serviceOrder = ['SSH', 'GPU', 'filesystem capacity'];
                        return serviceOrder.indexOf(a.serviceName) - serviceOrder.indexOf(b.serviceName)
                    })
                    .map((check, i) => {
                        return (
                            <div key={i} className="flex items-center my-2">
                                <div
                                    className={`rounded-full flex justify-center items-center p-1 mr-4 relative z-10 ${{
                                        up: "bg-green-600",
                                        down: "bg-red-600",
                                        paused: "bg-gray-600",
                                        grace: "bg-yellow-600",
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
                                            {moment(check.last_ping).diff(moment(), "days") > -100
                                                ? moment(check.last_ping).fromNow()
                                                : moment(check.last_ping).format("DD MMMM YYYY")}
                                        </span>
                                        {check.last_duration !== undefined && check.last_duration !== 0 &&
                                            <span className="flex items-center ml-1">
                                                <ClockIcon className="h-3 w-3 text-gray-500 mr-1" />
                                                {check.last_duration} sec
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>)
                    })
            }
        </div>
        {!noInstructions.includes(name) && 
        (
        <Modal size="xl" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Follow the steps below to access {name}: <br /> <br />
            {getInstructionBody(name, machineName)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>)}
    </>
    );
};

export default Check;
