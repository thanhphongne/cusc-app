import { Thead, Tr, Th } from "@chakra-ui/react";
import React from "react";

type Props = {};

const TableHeader = (props: Props) => {
    return (
        <Thead>
            <Tr>
                <Th>Stt</Th>
                <Th>Họ và tên</Th>
                <Th>Nữ</Th>
                <Th>Địa chỉ</Th>
                <Th>Điện thoại</Th>
                <Th>Email</Th>
                <Th>Chức vụ</Th>
                <Th>Sửa</Th>
                <Th>Xóa</Th>
                <Th>Cập nhật chức vụ</Th>
            </Tr>
        </Thead>
    );
};

export default TableHeader;
