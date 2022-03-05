import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { PauseIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/solid";

import moment from "moment";

const Check = ({ name, checksData }) => {
    return (
        <div
            className={`text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6`}
        >
            <h1 className="text-2xl text-gray-400 font-semibold mb-1 leading-tight">{name}</h1>

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
    );
};

export default Check;
