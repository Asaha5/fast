import { WebComponentDefinition } from "@microsoft/fast-tooling/dist/esm/data-utilities/web-component";
import { DataType } from "@microsoft/fast-tooling";

export const fastButtonDefinition: WebComponentDefinition = {
    version: 1,
    tags: [
        {
            name: "fast-button",
            title: "Button",
            description: "The FAST button element",
            attributes: [
                {
                    name: "appearance",
                    description: "The appearance attribute",
                    type: DataType.string,
                    values: [
                        {
                            name: "accent",
                        },
                        {
                            name: "lightweight",
                        },
                        {
                            name: "neutral",
                        },
                        {
                            name: "outline",
                        },
                        {
                            name: "stealth",
                        },
                    ],
                    default: "neutral",
                    required: false,
                },
                {
                    name: "autofocus",
                    description: "The autofocus attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    description: "The disabled attribute",
                    type: DataType.boolean,
                    default: undefined,
                    required: false,
                },
                {
                    name: "form",
                    description: "The form attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "formaction",
                    description: "The formaction attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "formenctype",
                    description: "The formenctype attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "formmethod",
                    description: "The formmethod attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "formnovalidate",
                    description: "The formnovalidate attribute",
                    type: DataType.boolean,
                    default: undefined,
                    required: false,
                },
                {
                    name: "formtarget",
                    description: "The formtarget attribute",
                    type: DataType.string,
                    default: undefined,
                    values: [
                        {
                            name: "_self",
                        },
                        {
                            name: "_blank",
                        },
                        {
                            name: "_parent",
                        },
                        {
                            name: "_top",
                        },
                    ],
                    required: false,
                },
                {
                    name: "name",
                    description: "The name attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "type",
                    description: "The type attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
                {
                    name: "value",
                    description: "The value attribute",
                    type: DataType.string,
                    default: undefined,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the anchor",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the button content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the button content",
                },
            ],
        },
    ],
};
