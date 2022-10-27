import { Tr, Td, Button, IconButton } from "@chakra-ui/react";
import React from "react";
import { CadresDataType } from "../types/cadresDataType";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

type Props = {
    cadres: CadresDataType;
    onUpdate: (cadres: CadresDataType) => void;
    onRemove: (cadres: CadresDataType) => void;
    onUpdateRole: (cadres: CadresDataType) => void;
};

const TableItem = ({ cadres, onUpdate, onRemove, onUpdateRole }: Props) => {
    return (
        <Tr>
            <Td>{cadres.id}</Td>
            <Td>{cadres.name}</Td>
            <Td>{cadres.female ? "X" : ""}</Td>
            <Td>{cadres.address}</Td>
            <Td>{cadres.phone}</Td>
            <Td>{cadres.email}</Td>
            <Td>{cadres.role}</Td>
            <Td>
                <IconButton
                    aria-label="Update"
                    onClick={() => onUpdate(cadres)}
                    icon={<AiOutlineEdit />}
                />
            </Td>
            <Td>
                <IconButton
                    aria-label="remove"
                    onClick={() => onRemove(cadres)}
                    icon={<BsTrash />}
                />
            </Td>
            <Td>
                <Button
                    aria-label="update Role"
                    onClick={() => onUpdateRole(cadres)}
                >
                    Cập nhật
                </Button>
            </Td>
        </Tr>
    );
};

export default TableItem;
