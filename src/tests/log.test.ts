import { uploadLog } from "@/lib/db/queries";
import { submitLogs } from '@/components/modules/logs/form/components/submitLog';
import { uploadPhotos } from "@/lib/utils/cloudinaryUploader";

describe("creates a log", () => {
    it("should successfully upload a log to DB", async () => {
        const form = new FormData()
        form.set("file", "link")

        const res = await submitLogs({
            title: "xxx",
            location: "Tehran",
            description: "Somewhere sunny",
            tips: { "tip0": "Avoid traffic hours" },
            mapData: { lat: 23.333, lng: -1.4232111 },
            images: [["ddddffffr", "img.url"], ["ddddffffrr", "img.url1"],]
        }, form)

        expect(res).toBe("failed")
    });
});

describe("uploads media to cloudinary", () => {
    test("should succesfully return file data", () => {

        // const files = [File]

        // const res = uploadPhotos(files)

        expect("").toBe([])
    })
})