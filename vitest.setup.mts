import { beforeAll, vi } from 'vitest';
import '@/kdemo/declarations.d.ts';


beforeAll(() => {
    vi.mock('arches', () => ({
        default: '',
    }));

    vi.mock('vue3-gettext', () => ({
        useGettext: () => ({
            $gettext: (text: string) => (text)
        })
    }));
});
