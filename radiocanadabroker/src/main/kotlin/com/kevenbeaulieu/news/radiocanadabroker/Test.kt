package com.kevenbeaulieu.news.radiocanadabroker

import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Service

@Service
class Test(val kafka: KafkaTemplate<String, String>) {
    fun send(message: String) = kafka.send("test", message)
}
