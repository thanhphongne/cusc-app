import {
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
    Table,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { CadresDataType } from "../types/cadresDataType";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

type Props = {
    data: CadresDataType[];
    onUpdate: (cadres: CadresDataType) => void;
    onRemove: (cadres: CadresDataType) => void;
    onUpdateRole: (cadres: CadresDataType) => void;
};

const TableComponent = (props: Props) => {
    return (
        <TableContainer>
            <Table variant={"simple"} size="md" colorScheme={"blackAlpha"}>
                <TableHeader />
                <Tbody>
                    {props.data.map((cadres) => (
                        <TableItem
                            key={cadres.id}
                            cadres={cadres}
                            onUpdate={props.onUpdate}
                            onRemove={props.onRemove}
                            onUpdateRole={props.onUpdateRole}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default memo(TableComponent);
