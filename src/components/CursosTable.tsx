import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import data from '../assets/data.json';
import { FaDownload } from 'react-icons/fa';
const itemsPerPage = 8;

export default function CursosTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const { t } = useTranslation();

  const filteredCursos = data
    .filter(curso =>
      curso.Curso.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'fecha') {
        return b.FechaExpedicion.localeCompare(a.FechaExpedicion);
      } else if (sortBy === 'lugar') {
        return a.Lugar.localeCompare(b.Lugar);
      }
      return 0;
    });

  const pageCount = Math.ceil(filteredCursos.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredCursos.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container section" id="cursos">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-4">
              <h2><b>{t('miscursos')}</b></h2>
            </div>
            <div className="col-sm-8">
              <a href={t('cvDownload')} className="btn btn-info"><FaDownload />
                 <span>{t('cv')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex mb-3 gap-2">
          <input
            type="text"
            className="form-control"
            placeholder={t('placeholderbusqueda')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">{t('orderby')}</option>
            <option value="fecha">{t('fecharecent')}</option>
            <option value="lugar">{t('placecourse')}</option>
          </select>
        </div>

        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table className="table table-striped w-100">
              <thead>
                <tr>
                  <th>{t('thCurso')}</th>
                  <th>{t('thInstitute')}</th>
                  <th>{t('thFecha')}</th>
                  <th>{t('thAmbito')}</th>
                  <th>Framework</th>
                  <th>{t('thCertificado')}</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((curso, index) => (
                  <tr key={index}>
                    <td>{curso.Curso}</td>
                    <td>{curso.Lugar}</td>
                    <td>{curso.FechaExpedicion}</td>
                    <td>{curso.Ambito}</td>
                    <td>{curso.Framework}</td>
                    <td dangerouslySetInnerHTML={{ __html: curso.VerCertificado }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ReactPaginate
          previousLabel={t('Anterior')}
          nextLabel={t('Siguiente')}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center mt-3'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}
