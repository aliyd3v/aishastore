const fs = require('fs')
const { S3Client, DeleteObjectCommand, HeadBucketCommand, CreateBucketCommand } = require('@aws-sdk/client-s3')
const { Upload } = require('@aws-sdk/lib-storage')
const { S3CLIENT_ACCESS_KEY_ID, S3CLIENT_SECRET_ACCESS_KEY, S3CLIENT_BUCKET_NAME, S3CLIENT_REGION, S3CLIENT_ENDPOINT, SUPABASE_PROJECT_ID } = require('../config/config.js')

// S3CLIENT SETUP.
const s3Client = new S3Client({
    forcePathStyle: true,
    region: S3CLIENT_REGION,
    endpoint: S3CLIENT_ENDPOINT,
    credentials: {
        accessKeyId: S3CLIENT_ACCESS_KEY_ID,
        secretAccessKey: S3CLIENT_SECRET_ACCESS_KEY
    }
})

// CHECK BUCKET IN AWS FOR EXISTENCE.
const checkBucket = async () => {
    // GET HEAD BUCKET.
    const bucket = await s3Client.send(new HeadBucketCommand({ Bucket: S3CLIENT_BUCKET_NAME }))
    if (bucket['$metadata'].httpStatusCode !== 200)
        // IF BUCKET NO EXISTS.
        // CREATE NEW BUCKET.
        await s3Client.send(new CreateBucketCommand({ ACL: 'public-read', Bucket: S3CLIENT_BUCKET_NAME }))
}

// UPLOAD IMAGE TO AWS STORAGE.
const uploadToCloud = async (path, fileName) => {
    try {
        // Checking bucket.
        await checkBucket()

        // Uploading.
        const file = fs.createReadStream(path)
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: S3CLIENT_BUCKET_NAME,
                Key: fileName,
                ContentType: ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'],
                Body: file,
            },
            queueSize: 4,
            partSize: 5 * 1024 * 1024,
            leavePartsOnError: false
        })
        const uploaded = await upload.done()
        return `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${S3CLIENT_BUCKET_NAME}//${uploaded.Key}`
    } catch (error) {
        throw error
    }
}

// DELETE IMAGE FROM AWS STORAGE.
const deleteFromCloud = async fileName => {
    const command = new DeleteObjectCommand({
        Bucket: S3CLIENT_BUCKET_NAME,
        Key: fileName
    })
    await s3Client.send(command)
}

module.exports = {
    uploadToCloud,
    deleteFromCloud
}