import { submitLogs } from '@/components/modules/logs/form/components/FormSubmit';

describe("creates a log", () => {
    it("should successfully upload a log to DB", async () => {

        const pngBlob = new Blob([''], { type: 'image/png' });
        const mockPngFile = new File([pngBlob], 'mockImage.png', { type: 'image/png' });

        const fetchMockResponse1 = { "public_id": "public_id1", "secure_url": "url1" }
        const fetchMockResponse2 = { "public_id": "public_id2", "secure_url": "url2" }

        global.fetch = jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(fetchMockResponse1)
            })
        ).mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(fetchMockResponse2)
            })
        )

        const imagesForm = new FormData()
        imagesForm.set("file1", mockPngFile)
        imagesForm.set("file2", mockPngFile)

        const res = await submitLogs({
            title: 'Tehran',
            location: 'Iran',
            description: "Somewhere sunny",
            tips: { "tip0": "Avoid traffic hours" },
            mapData: { lat: 23.333, lng: -1.4232111 },
        }, imagesForm)

        expect(res).toEqual(true)
    });
});