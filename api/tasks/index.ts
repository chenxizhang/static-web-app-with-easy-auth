import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const result = [{
        id: 1,
        title: "task1"
    }, {
        id: 2,
        title: "task2"
    }
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            tasks: result,
            headers: req.headers
        }
    };

};

export default httpTrigger;