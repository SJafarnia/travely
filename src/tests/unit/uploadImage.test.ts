import { uploadPhotos } from "@/lib/utils/cloudinaryUploader";

type resposeData = [publicId: string, link: string][]

const testUploadToCloudinary = async (): Promise<resposeData> => {
    const pngBlob = new Blob([''], { type: 'image/png' });
    const mockPngFile = new File([pngBlob], 'mockImage.png', { type: 'image/png' });

    const files: File[] = [mockPngFile, mockPngFile]

    const fetchMockResponse1 = { "public_id": "public_id1", "secure_url": "url1" }
    const fetchMockResponse2 = { "public_id": "public_id2", "secure_url": "url2" }

    const mockResponse: resposeData = [["public_id1", "url1"], ["public_id2", "url2"]]

    global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
            json: () => Promise.resolve(fetchMockResponse1)
        })
    ).mockImplementationOnce(() =>
        Promise.resolve({
            json: () => Promise.resolve(fetchMockResponse2)
        })
    )

    const result: resposeData = await uploadPhotos(files)
    expect(result).toEqual(mockResponse)

    return result
};

describe("uploads media to cloudinary", () => {
    test("should succesfully return an array of [publicId, link]", async () => {

        await testUploadToCloudinary();
    })
})

module.exports = testUploadToCloudinary;