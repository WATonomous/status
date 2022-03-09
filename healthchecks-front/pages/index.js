import Head from "next/head";

import useSWR from "swr";
import fetcher from "../libs/fetch";
import { useState } from "react";
import Check from "../components/Check";
import { Button, Modal } from "react-bootstrap";
import { XIcon } from "@heroicons/react/outline";

const VMAdditionalInfo = {
    "delta-ubuntu1": {
    FQDN: "e7-wato-vm2.uwaterloo.ca",
    machineName: "delta-ubuntu1.watocluster.local",
    },
    "thor-ubuntu1": {
    FQDN: "e7-wato-vm1.uwaterloo.ca",
    machineName: "thor-ubuntu1.watocluster.local",
    },
    "tr-ubuntu1": {
    FQDN: "e7-wato-vm9.uwaterloo.ca",
    machineName: "tr-ubuntu1.watocluster.local",
    },
    "wato2-ubuntu1": {
    FQDN: "wato-wato2.uwaterloo.ca",
    machineName: "wato2-ubuntu1.watocluster.local",
    },
    "wato3-ubuntu1": {
    FQDN: "wato-wato3.uwaterloo.ca",
    machineName: "wato3-ubuntu1.watocluster.local",
    },
    Bastion: {
    FQDN: "e7-wato-vm0.uwaterloo.ca",
    },
    Ceph: {
    FQDN: "",
    },
};

export default function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data: checks, error: errorChecks } = useSWR(
        "/v1/checks/",
        fetcher,
        { refreshInterval: 30000, refreshWhenHidden: true }
    );

    const vmChecks = {};
    let checksTotal = 0;
    let checksError = 0;

    if (checks) {
        checks.checks.forEach((check) => {
            checksTotal++;
            check.status == "down" && checksError++;
            const name = check.name.split(" ")[0];
            check.serviceName = check.name.replace(`${name} `, "").replace(/[()]/g, "");
            if (!vmChecks[name]) {
                vmChecks[name] = {
                    items: [check],
                };
            } else {
                vmChecks[name].items.push(check);
            }
        });
    }

    return (
        <div>
            <Head>
                <title>{"WATonomous Services"}</title>
                <meta name="description" content="All your healtchecks at a glance" />
                <meta property="og:title" content={"WATonomous Services"} />
                <meta property="og:image" content="og_image.png" />
                <meta
                    property="og:description"
                    content="All your healtchecks at a glance"
                />
                <link
                    rel="icon"
                    href={`/${checksError ? "favicon-error.ico" : "favicon.ico"}`}
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
                                className={`rounded-full absolute inset-6 bg-gradient-to-b ${checksError
                                    ? "from-red-400 border-red-500"
                                    : "from-green-400 border-green-500"
                                    } border-2 opacity-20 z-0 animate-ping-slow`}
                            ></div>
                            <div
                                className={`rounded-full absolute inset-4 ${checksError ? "bg-red-400" : "bg-green-400"
                                    } bg-opacity-10 z-10 animate-pulse`}
                            ></div>
                            <div
                                className={`rounded-full absolute inset-6 inse bg-gradient-to-b ${checksError
                                    ? "from-red-500 to-red-600 border-red-500"
                                    : "from-green-500 to-green-600 border-green-500"
                                    } border-4  z-20`}
                            ></div>
                        </div>
                        <h1
                            className={`${checksError ? "text-red-500" : "text-green-400"
                                } font-bold text-center text-xl`}
                        >
                            {checksError
                                ? `${checksError} ${checksError == 1 ? "error" : "errors"}`
                                : `${checksTotal} ${checksTotal == 1 ? "check" : "checks"
                                }, all fine 😌`}
                        </h1>
                    </div>
                )}
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <button className="bg-blue-800 p-2 rounded" onClick={handleShow}>
                        <p className="text-white">
                            Prerequisites
                        </p>
                    </button>
                </div>
                <Modal size="xl" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>VM Access Instructions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> 
                            <b> Teleport </b> <br/> 
                            Please ensure you have filled out the
                            <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://forms.gle/rhT1Pe9Z43Y5Ri8P8">
                                {" "} Member Form {" "}
                            </a>
                             first. 
                             <br/> Then, 
                            <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://goteleport.com/docs/server-access/guides/tsh/">
                                {" "} follow the following guide to download the CLI tool. {" "}
                            </a>
                            <br/>
                            If you want to set up remote development with VSCode,
                            <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://goteleport.com/docs/server-access/guides/vscode/">
                                {" "} please use the following guide.
                            </a> <br/>
                            <b>Agent Forwarding</b> <br/>
                            <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href="https://docs.github.com/en/developers/overview/using-ssh-agent-forwarding">
                                Read the following guide.
                            </a>
                        </p>
                            

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {checks && (
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {vmChecks &&
                            Object.entries(vmChecks)
                                .sort((vm1, vm2) => {
                                    const vmOrder = ["delta-ubuntu1","thor-ubuntu1", "tr-ubuntu1", "wato2-ubuntu1", "wato3-ubuntu1", "Bastion", "Ceph"];
                                    return vmOrder.indexOf(vm1[0]) - vmOrder.indexOf(vm2[0]);
                                })
                                .map(([vmName, vmChecksData], i) => (
                                    <Check
                                        key={i}
                                        name={vmName}
                                        checksData={vmChecksData.items}
                                        FQDN={VMAdditionalInfo[vmName].FQDN}
                                        machineName={VMAdditionalInfo[vmName].machineName}

                                    />
                                ))}
                    </div>
                )}
            </div>
        </div>
    );
}