import { RowElement, RowID } from './interface';

type insertRow = (row: RowElement) => number;

type deleteRow = (rowId: RowID) => void;

type updateRow = (rowId: RowID, row: RowElement) => number;

export function insertRow(row: RowElement): number {
  throw new Error('Function not implemented.');
}


export function updateRow(newRowID: number, updatedRow: RowElement) {
  throw new Error('Function not implemented.');
}


export function deleteRow(newRowID: number) {
  throw new Error('Function not implemented.');
}
