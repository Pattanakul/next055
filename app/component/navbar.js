import Link from 'next/link';

export default function Home() {
    return (
        <>
            <header class="p-3 mb-3 border-bottom">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link href="/" class="nav-link px-2 link-secondary">home</Link></li>
                            <li><Link href="/about" class="nav-link px-2 link-body-emphasis">about</Link></li>
                            <li><Link href="#" class="nav-link px-2 link-body-emphasis">Customers</Link></li>
                            <li><Link href="#" class="nav-link px-2 link-body-emphasis">Products</Link></li>
                        </ul>

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                        </form>

                        <div class="dropdown text-end">
                            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"></img>
                            </a>
                            <ul class="dropdown-menu text-small">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-divider"></a></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
