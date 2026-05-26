import admin from 'firebase-admin'
import { readFileSync } from 'fs'

const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'))
const db_data = JSON.parse(readFileSync('./db.json', 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

/**
 * Fully replaces all documents in a collection with new data.
 * Step 1: Deletes every existing document in the collection.
 * Step 2: Writes all new documents from db.json.
 */
async function replaceCollection(collectionName, data) {
    console.log(`\n🗑️  Clearing old "${collectionName}" data...`)

    // Delete all existing documents
    const existing = await db.collection(collectionName).get()
    const deleteBatch = db.batch()
    existing.docs.forEach(doc => deleteBatch.delete(doc.ref))
    await deleteBatch.commit()
    console.log(`   ✓ Deleted ${existing.size} old document(s)`)

    // Write new documents
    console.log(`📦  Importing new "${collectionName}" data...`)
    for (const item of data) {
        const { id, ...rest } = item
        await db.collection(collectionName).doc(String(id)).set(rest)
        console.log(`   ✓ Written: ${collectionName}/${id}`)
    }

    console.log(`✅  "${collectionName}" updated successfully!\n`)
}

async function main() {
    console.log('='.repeat(50))
    console.log(' Yetu Housing — Data Update Import')
    console.log('='.repeat(50))

    await replaceCollection('properties', db_data.properties)
    await replaceCollection('agents', db_data.agents)
    await replaceCollection('contacts', db_data.contacts)

    console.log('='.repeat(50))
    console.log(' 🎉 All collections updated successfully!')
    console.log('='.repeat(50))
    process.exit(0)
}

main().catch(err => {
    console.error('❌ Import failed:', err)
    process.exit(1)
})
