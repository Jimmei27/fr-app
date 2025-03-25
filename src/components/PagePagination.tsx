import { Pagination } from "react-bootstrap"

interface PagePaginationProps {
    currentPage: number
    setCurrentPage: (pageNumber: number) => void;
}

const PagePagination: React.FC<PagePaginationProps> = ({ currentPage, setCurrentPage }) => {

    const totalPages = Array.from({ length: 10}, (_, index) => index + 1)

    return (
        <Pagination className="justify-content-center py-4">
            <Pagination.Prev 
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
            />
                {totalPages.map(page => (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)} 
                    >
                        {page}
                    </Pagination.Item>
                ))}
            <Pagination.Next 
                onClick={() => currentPage < 10 && setCurrentPage(currentPage + 1)} 
                disabled={currentPage === 10}
            />
        </Pagination>

    )
}

export default PagePagination