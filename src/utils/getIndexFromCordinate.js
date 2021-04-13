export const getIndexFromCoordinate = (sizeOfBoard, line, column) => (
    (line === 0) ? column : ((line > 0) ? line * sizeOfBoard + column : undefined)
)
