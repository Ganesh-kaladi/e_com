export const Paginationcomponent = () => {
    return (
        <section className="mt-6 mb-5" >
            <nav aria-label="Page navigation example" >
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#pre" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#1">1</a></li>
                    <li class="page-item"><a class="page-link" href="#2">2</a></li>
                    <li class="page-item"><a class="page-link" href="#3">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#next" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}