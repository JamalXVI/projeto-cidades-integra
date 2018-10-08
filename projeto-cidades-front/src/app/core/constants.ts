import { MatPaginatorIntl } from '@angular/material';
import { City } from './models/city.model';

export const PAGE_SIZE_OPTIONS = [5, 10, 15, 20];
export const DEFAULT_PAGE_SIZE_OPTION = 10;

export function CityFilter(city: City, filters: any): boolean {
    if ((!filters.name || city.name &&
        city.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.ibgeId || city.ibgeId.toString().includes(filters.ibgeId)) &&
        (!filters.state || city.state && city.state.uf && 
            city.state.uf.toLowerCase().includes(filters.state.toLowerCase())) &&
        (!filters.nameWithOutAccent ||
            city.nameWithOutAccent && city.nameWithOutAccent.toLowerCase()
                .includes(filters.nameWithOutAccent.toLowerCase())) &&
        (!filters.alternativaName || city.alternativaName && city.alternativaName.toLowerCase()
            .includes(filters.alternativaName.toLowerCase())) &&
        (!filters.capital || city.capital == !!filters.capital) &&
        (!filters.longitude || city.longitude.toString().includes(filters.longitude)) &&
        (!filters.latitude || city.latitude.toString().includes(filters.latitude)) &&
        (!filters.microRegion || city.microRegion.toLowerCase()
            .includes(filters.toLowerCase().microRegion)) &&
        (!filters.mesoRegion || city.mesoRegion.toLowerCase()
            .includes(filters.toLowerCase().mesoRegion))) {
        return true;
    }
    return false;
}

export class CustomPaginatorLabels extends MatPaginatorIntl {
    itemsPerPageLabel = 'Itens por Página';
    nextPageLabel = 'Próxima Página';
    previousPageLabel = 'Página Anterior';
}