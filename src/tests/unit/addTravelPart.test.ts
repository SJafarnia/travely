import { submitPart } from '@/components/modules/dashboard/travels/addTravelPart/SubmitPart';

type resposeData = [publicId: string, link: string][];

describe('adds a new part to a Travel log', () => {
    test('should return true', async () => {
        const pngBlob = new Blob([''], { type: 'image/png' });
        const mockPngFile = new File([pngBlob], 'mockImage.png', {
            type: 'image/png',
        });

        const files: File[] = [mockPngFile, mockPngFile];

        const fetchMockResponse1 = {
            public_id: 'public_id1',
            secure_url: 'url1',
        };
        const fetchMockResponse2 = {
            public_id: 'public_id2',
            secure_url: 'url2',
        };

        const mockResponse: resposeData = [
            ['public_id1', 'url1'],
            ['public_id2', 'url2'],
        ];

        global.fetch = jest
            .fn()
            .mockImplementationOnce(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fetchMockResponse1),
                })
            )
            .mockImplementationOnce(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fetchMockResponse2),
                })
            );

        const imagesForm = new FormData();
        imagesForm.set('file1', mockPngFile);
        imagesForm.set('file2', mockPngFile);

        const res = await submitPart(
            {
                title: 'Tehran',
                description: 'Somewhere sunny',
                tips: { tip0: 'Avoid traffic hours' },
                mapData: { lat: 23.333, lng: -1.4232111 },
                images: [],
            },
            imagesForm
        );

        expect(res).toBe(true);
    });
});
